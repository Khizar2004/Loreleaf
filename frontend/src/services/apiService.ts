import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Configure axios
const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Leaf {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  userId: string;
  forwardLinks?: { id: string; title: string }[];
  backLinks?: { id: string; title: string }[];
}

export interface CreateLeafData {
  title: string;
  content: string;
  tags?: string[];
  linkedLeafIds?: string[];
}

export interface UpdateLeafData {
  title?: string;
  content?: string;
  tags?: string[];
  linkedLeafIds?: string[];
}

export interface FilterParams {
  tags?: string[];
  search?: string;
  startDate?: string;
  endDate?: string;
}

export interface GraphData {
  nodes: {
    id: string;
    title: string;
    tags: string[];
  }[];
  edges: {
    sourceLeafId: string;
    targetLeafId: string;
  }[];
}

export interface Analytics {
  totalLeaves: number;
  topTags: { tag: string; count: number }[];
  mostLinkedLeaves: { id: string; title: string; linkCount: number }[];
  growthByMonth: Record<string, number>;
}

const leafService = {
  // Get all leaves with optional filtering
  async getLeaves(filters?: FilterParams): Promise<Leaf[]> {
    let url = '/leaves';
    const params = new URLSearchParams();

    if (filters) {
      if (filters.search) params.append('search', filters.search);
      if (filters.startDate) params.append('startDate', filters.startDate);
      if (filters.endDate) params.append('endDate', filters.endDate);
      if (filters.tags && filters.tags.length > 0) {
        filters.tags.forEach(tag => params.append('tags', tag));
      }
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const response = await api.get(url);
    return response.data.leaves;
  },

  // Get a leaf by ID
  async getLeaf(id: string): Promise<Leaf> {
    const response = await api.get(`/leaves/${id}`);
    return response.data.leaf;
  },

  // Create a new leaf
  async createLeaf(data: CreateLeafData): Promise<Leaf> {
    const response = await api.post('/leaves', data);
    return response.data.leaf;
  },

  // Update a leaf
  async updateLeaf(id: string, data: UpdateLeafData): Promise<Leaf> {
    const response = await api.put(`/leaves/${id}`, data);
    return response.data.leaf;
  },

  // Delete a leaf
  async deleteLeaf(id: string): Promise<void> {
    await api.delete(`/leaves/${id}`);
  },

  // Get knowledge graph data
  async getGraph(): Promise<GraphData> {
    const response = await api.get('/graph');
    return response.data.graph;
  },

  // Get analytics data
  async getAnalytics(): Promise<Analytics> {
    const response = await api.get('/graph/analytics');
    return response.data.analytics;
  },
};

export default leafService; 