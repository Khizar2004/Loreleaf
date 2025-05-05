import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateLeafData {
  title: string;
  content: string;
  tags: string[];
  linkedLeafIds?: string[];
  userId: string;
}

export interface UpdateLeafData {
  title?: string;
  content?: string;
  tags?: string[];
  linkedLeafIds?: string[];
}

export interface FilterOptions {
  tags?: string[];
  search?: string;
  startDate?: string;
  endDate?: string;
}

export const leafService = {
  // Create a new leaf
  async createLeaf(data: CreateLeafData) {
    const { title, content, tags, linkedLeafIds = [], userId } = data;

    // Create leaf
    const leaf = await prisma.leaf.create({
      data: {
        title,
        content,
        tags,
        userId,
      },
    });

    // Create links if provided
    if (linkedLeafIds.length > 0) {
      await this.createLinks(leaf.id, linkedLeafIds);
    }

    return leaf;
  },

  // Get leaf by ID
  async getLeafById(id: string, userId: string) {
    const leaf = await prisma.leaf.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        linkedTo: {
          include: {
            targetLeaf: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
        linkedFrom: {
          include: {
            sourceLeaf: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
    });

    if (!leaf) {
      throw new Error('Leaf not found');
    }

    // Prepare the links in a more usable format
    const forwardLinks = leaf.linkedTo.map((link) => ({
      id: link.targetLeaf.id,
      title: link.targetLeaf.title,
    }));

    const backLinks = leaf.linkedFrom.map((link) => ({
      id: link.sourceLeaf.id,
      title: link.sourceLeaf.title,
    }));

    return {
      ...leaf,
      forwardLinks,
      backLinks,
    };
  },

  // Get all leaves for a user
  async getLeaves(userId: string, filter?: FilterOptions) {
    const where: any = { userId };

    // Apply filters if provided
    if (filter) {
      // Tags filter
      if (filter.tags && filter.tags.length > 0) {
        where.tags = {
          hasSome: filter.tags,
        };
      }

      // Search filter
      if (filter.search) {
        where.OR = [
          { title: { contains: filter.search, mode: 'insensitive' } },
          { content: { contains: filter.search, mode: 'insensitive' } },
        ];
      }

      // Date range filter
      if (filter.startDate) {
        where.createdAt = {
          ...(where.createdAt || {}),
          gte: new Date(filter.startDate),
        };
      }

      if (filter.endDate) {
        where.createdAt = {
          ...(where.createdAt || {}),
          lte: new Date(filter.endDate),
        };
      }
    }

    return prisma.leaf.findMany({
      where,
      orderBy: {
        updatedAt: 'desc',
      },
      include: {
        linkedTo: {
          select: {
            targetLeafId: true,
          },
        },
        linkedFrom: {
          select: {
            sourceLeafId: true,
          },
        },
      },
    });
  },

  // Update a leaf
  async updateLeaf(id: string, userId: string, data: UpdateLeafData) {
    const { title, content, tags, linkedLeafIds } = data;

    // Find leaf to ensure it belongs to the user
    const existingLeaf = await prisma.leaf.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingLeaf) {
      throw new Error('Leaf not found');
    }

    // Update leaf
    const updatedLeaf = await prisma.leaf.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(content && { content }),
        ...(tags && { tags }),
      },
    });

    // Update links if provided
    if (linkedLeafIds) {
      // Get current links
      const currentLinks = await prisma.leafLink.findMany({
        where: {
          sourceLeafId: id,
        },
        select: {
          targetLeafId: true,
        },
      });

      const currentLinkIds = currentLinks.map((link) => link.targetLeafId);

      // Find links to add and remove
      const linksToAdd = linkedLeafIds.filter(
        (linkId) => !currentLinkIds.includes(linkId)
      );
      const linksToRemove = currentLinkIds.filter(
        (linkId) => !linkedLeafIds.includes(linkId)
      );

      // Add new links
      if (linksToAdd.length > 0) {
        await this.createLinks(id, linksToAdd);
      }

      // Remove links
      if (linksToRemove.length > 0) {
        await prisma.leafLink.deleteMany({
          where: {
            sourceLeafId: id,
            targetLeafId: {
              in: linksToRemove,
            },
          },
        });
      }
    }

    return updatedLeaf;
  },

  // Delete a leaf
  async deleteLeaf(id: string, userId: string) {
    // Find leaf to ensure it belongs to the user
    const leaf = await prisma.leaf.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!leaf) {
      throw new Error('Leaf not found');
    }

    // Delete leaf (links will be automatically deleted due to cascade)
    return prisma.leaf.delete({
      where: { id },
    });
  },

  // Create links between leaves
  async createLinks(sourceLeafId: string, targetLeafIds: string[]) {
    // Filter out duplicates and self-links
    const uniqueTargetIds = targetLeafIds.filter(
      (id) => id !== sourceLeafId
    );

    // Get existing links to avoid duplicates
    const existingLinks = await prisma.leafLink.findMany({
      where: {
        sourceLeafId,
        targetLeafId: {
          in: uniqueTargetIds,
        },
      },
      select: {
        targetLeafId: true,
      },
    });

    const existingLinkIds = existingLinks.map((link) => link.targetLeafId);
    const newLinkIds = uniqueTargetIds.filter(
      (id) => !existingLinkIds.includes(id)
    );

    if (newLinkIds.length === 0) {
      return [];
    }

    // Create links in a transaction
    return prisma.$transaction(
      newLinkIds.map((targetId) =>
        prisma.leafLink.create({
          data: {
            sourceLeafId,
            targetLeafId: targetId,
          },
        })
      )
    );
  },

  // Get knowledge graph data for a user
  async getGraph(userId: string) {
    // Get all leaves
    const leaves = await prisma.leaf.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        title: true,
        tags: true,
      },
    });

    // Get all links
    const links = await prisma.leafLink.findMany({
      where: {
        sourceLeaf: {
          userId,
        },
      },
      select: {
        sourceLeafId: true,
        targetLeafId: true,
      },
    });

    return {
      nodes: leaves,
      edges: links,
    };
  },

  // Get analytics data
  async getAnalytics(userId: string) {
    // Get total leaf count
    const totalLeaves = await prisma.leaf.count({
      where: { userId },
    });

    // Get most used tags
    const leaves = await prisma.leaf.findMany({
      where: { userId },
      select: { tags: true },
    });

    // Count tag occurrences
    const tagCounts: Record<string, number> = {};
    leaves.forEach((leaf) => {
      leaf.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    // Sort tags by count
    const topTags = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([tag, count]) => ({ tag, count }));

    // Get most linked leaves
    const mostLinkedLeaves = await prisma.leaf.findMany({
      where: { userId },
      select: {
        id: true,
        title: true,
        linkedFrom: { select: { sourceLeafId: true } },
      },
      orderBy: {
        linkedFrom: {
          _count: 'desc',
        },
      },
      take: 5,
    });

    // Get growth over time (leaves created per month)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const recentLeaves = await prisma.leaf.findMany({
      where: {
        userId,
        createdAt: {
          gte: sixMonthsAgo,
        },
      },
      select: {
        createdAt: true,
      },
    });

    // Group by month
    const growthByMonth: Record<string, number> = {};
    recentLeaves.forEach((leaf) => {
      const monthYear = leaf.createdAt.toISOString().slice(0, 7); // Format: YYYY-MM
      growthByMonth[monthYear] = (growthByMonth[monthYear] || 0) + 1;
    });

    return {
      totalLeaves,
      topTags,
      mostLinkedLeaves: mostLinkedLeaves.map((leaf) => ({
        id: leaf.id,
        title: leaf.title,
        linkCount: leaf.linkedFrom.length,
      })),
      growthByMonth,
    };
  },

  // Link a leaf to other leaves
  async linkLeaf(sourceLeafId: string, userId: string, targetLeafIds: string[]) {
    // Check if leaf exists and belongs to user
    const leaf = await prisma.leaf.findFirst({
      where: {
        id: sourceLeafId,
        userId,
      },
    });

    if (!leaf) {
      throw new Error('Leaf not found');
    }

    // Create links
    const createdLinks = await this.createLinks(sourceLeafId, targetLeafIds);

    return {
      sourceLeaf: { id: leaf.id, title: leaf.title },
      linkedLeaves: createdLinks.length,
    };
  },

  // Export all leaves for a user
  async exportLeaves(userId: string) {
    // Get all leaves with their links
    const leaves = await prisma.leaf.findMany({
      where: { userId },
      include: {
        linkedTo: {
          include: {
            targetLeaf: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
        linkedFrom: {
          include: {
            sourceLeaf: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
    });

    // Transform to a more exportable format
    return leaves.map(leaf => ({
      id: leaf.id,
      title: leaf.title,
      content: leaf.content,
      tags: leaf.tags,
      createdAt: leaf.createdAt,
      updatedAt: leaf.updatedAt,
      forwardLinks: leaf.linkedTo.map(link => ({
        id: link.targetLeaf.id,
        title: link.targetLeaf.title,
      })),
      backLinks: leaf.linkedFrom.map(link => ({
        id: link.sourceLeaf.id,
        title: link.sourceLeaf.title,
      })),
    }));
  },

  // Import leaves for a user
  async importLeaves(userId: string, importData: any) {
    // Validate the import data structure
    if (!Array.isArray(importData)) {
      throw new Error('Import data must be an array of leaves');
    }

    // Create transaction for all database operations
    return prisma.$transaction(async (tx) => {
      // Map to track old IDs to new IDs
      const idMap = new Map<string, string>();
      
      // First create all leaves (without links)
      for (const leafData of importData) {
        const { title, content, tags } = leafData;
        
        if (!title || !content) {
          throw new Error('All leaves must have a title and content');
        }
        
        const newLeaf = await tx.leaf.create({
          data: {
            title,
            content,
            tags: Array.isArray(tags) ? tags : [],
            userId,
          },
        });
        
        // Store mapping from old ID to new ID
        idMap.set(leafData.id, newLeaf.id);
      }
      
      // Now create links between leaves using the new IDs
      const links: Array<{ sourceId: string, targetId: string }> = [];
      for (const leafData of importData) {
        if (leafData.forwardLinks && Array.isArray(leafData.forwardLinks)) {
          const sourceId = idMap.get(leafData.id);
          if (!sourceId) continue;
          
          for (const link of leafData.forwardLinks) {
            const targetId = idMap.get(link.id);
            if (!targetId || sourceId === targetId) continue;
            
            // Check if link already exists to avoid duplicates
            const existingLink = links.some(
              l => l.sourceId === sourceId && l.targetId === targetId
            );
            
            if (!existingLink) {
              links.push({ sourceId, targetId });
              
              await tx.leafLink.create({
                data: {
                  sourceLeafId: sourceId,
                  targetLeafId: targetId,
                },
              });
            }
          }
        }
      }
      
      return {
        importedLeaves: importData.length,
        createdLinks: links.length,
      };
    });
  },
}; 