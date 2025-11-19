import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import type { Node, Edge, Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { mockJourneys } from '../data/mockData.js';
import { JourneyNode as JourneyNodeComponent } from './JourneyNode.js';

const nodeTypes = {
  journey: JourneyNodeComponent,
};

function useDarkModeFromDom() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });

    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

// Create initial nodes from mock data
const initialNodes: Node[] = mockJourneys.map((journey, index) => ({
  id: journey.id,
  type: 'journey',
  position: { x: index * 300, y: 100 },
  data: {
    label: journey.name,
    journey: journey,
    metrics: journey.metrics,
  },
}));

// Create edges connecting the journeys
const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: 'journey-1',
    target: 'journey-2',
    animated: true,
    label: '78.5%',
  },
  {
    id: 'e2-3',
    source: 'journey-2',
    target: 'journey-3',
    animated: true,
    label: '85.2%',
  },
  {
    id: 'e3-4',
    source: 'journey-3',
    target: 'journey-4',
    animated: true,
    label: '92.1%',
  },
];

export function JourneyFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const isDark = useDarkModeFromDom();

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden" style={{ height: '400px' }}>
      <div className="px-4 py-3 border-b border-border bg-muted">
        <h2 className="text-lg font-semibold text-foreground">
          Value Stream (USPB Onboarding)
        </h2>
      </div>
      <div style={{ height: 'calc(100% - 60px)' }}>
        <ReactFlow
          colorMode={isDark ? 'dark' : 'light'}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

