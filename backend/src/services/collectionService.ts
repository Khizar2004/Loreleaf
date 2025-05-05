import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateCollectionData {
  name: string;
  tags?: string[];
  searchTerm?: string;
  createdAfter?: string;
  createdBefore?: string;
  userId: string;
}

export interface UpdateCollectionData {
  name?: string;
  tags?: string[];
  searchTerm?: string | null;
  createdAfter?: string | null;
  createdBefore?: string | null;
}

export const collectionService = {
  // Create a new collection
  async createCollection(data: CreateCollectionData) {
    const { name, tags = [], searchTerm, createdAfter, createdBefore, userId } = data;

    // Process date strings to proper Date objects if they exist
    const createdAfterDate = createdAfter ? new Date(createdAfter) : undefined;
    const createdBeforeDate = createdBefore ? new Date(createdBefore) : undefined;

    // Create collection
    const collection = await prisma.collection.create({
      data: {
        name,
        tags,
        searchTerm,
        createdAfter: createdAfterDate,
        createdBefore: createdBeforeDate,
        userId,
      },
    });

    return collection;
  },

  // Get all collections for a user
  async getCollections(userId: string) {
    return prisma.collection.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
  },

  // Get a collection by ID
  async getCollectionById(id: string, userId: string) {
    const collection = await prisma.collection.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    return collection;
  },

  // Update a collection
  async updateCollection(id: string, userId: string, data: UpdateCollectionData) {
    // Process dates if they exist
    const updateData: any = { ...data };
    
    if (data.createdAfter !== undefined) {
      updateData.createdAfter = data.createdAfter ? new Date(data.createdAfter) : null;
    }
    
    if (data.createdBefore !== undefined) {
      updateData.createdBefore = data.createdBefore ? new Date(data.createdBefore) : null;
    }

    // Check if collection exists and belongs to user
    const existing = await prisma.collection.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existing) {
      throw new Error('Collection not found');
    }

    return prisma.collection.update({
      where: { id },
      data: updateData,
    });
  },

  // Delete a collection
  async deleteCollection(id: string, userId: string) {
    // Check if collection exists and belongs to user
    const collection = await prisma.collection.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    await prisma.collection.delete({
      where: { id },
    });

    return true;
  },
}; 