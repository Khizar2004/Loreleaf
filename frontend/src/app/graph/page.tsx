'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import leafService, { GraphData } from '@/services/apiService';
import dynamic from 'next/dynamic';

// Import ForceGraph dynamically to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
    </div>
  ),
});

interface GraphNode {
  id: string;
  title: string;
  tags: string[];
}

interface GraphLink {
  source: string;
  target: string;
}

export default function GraphPage() {
  const [graphData, setGraphData] = useState<{ nodes: GraphNode[]; links: GraphLink[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const graphRef = useRef<any>(null);

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        setLoading(true);
        const data = await leafService.getGraph();
        
        // Transform the data for the graph visualization
        const graphData = {
          nodes: data.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            tags: node.tags,
          })),
          links: data.edges.map((edge) => ({
            source: edge.sourceLeafId,
            target: edge.targetLeafId,
          })),
        };
        
        setGraphData(graphData);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch graph data');
      } finally {
        setLoading(false);
      }
    };

    fetchGraphData();
  }, []);

  const handleNodeClick = (node: GraphNode) => {
    router.push(`/leaf/${node.id}`);
  };

  const handleZoomToFit = () => {
    if (graphRef.current) {
      graphRef.current.zoomToFit(400);
    }
  };

  return (
    <ProtectedRoute>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Knowledge Graph</h1>
          <button
            onClick={handleZoomToFit}
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md shadow transition"
          >
            Zoom to Fit
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : graphData && graphData.nodes.length === 0 ? (
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-4">
              You don't have any leaves yet to visualize as a graph.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[70vh]">
            {graphData && (
              <ForceGraph2D
                ref={graphRef}
                graphData={graphData}
                nodeLabel={(node: any) => node.title}
                nodeColor={() => '#059669'}
                linkColor={() => '#9ca3af'}
                onNodeClick={handleNodeClick}
                linkDirectionalArrowLength={3.5}
                linkDirectionalArrowRelPos={1}
                linkCurvature={0.25}
                cooldownTicks={100}
                onEngineStop={() => handleZoomToFit()}
              />
            )}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
} 