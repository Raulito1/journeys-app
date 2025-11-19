import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

import type { Journey, JourneyMetrics } from '../types/index.js';
import { Users, TrendingUp, Clock, AlertCircle } from 'lucide-react';

interface JourneyNodeData {
  label: string;
  journey: Journey;
  metrics: JourneyMetrics;
}

interface JourneyNodeProps {
  data: JourneyNodeData;
}

export const JourneyNode = memo(({ data }: JourneyNodeProps) => {
  const { label, metrics } = data;

  return (
    <div className="bg-card border-2 border-primary rounded-lg shadow-lg min-w-[250px]">
      <Handle type="target" position={Position.Left} className="w-3 h-3" />
      
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-t-md">
        <h3 className="font-semibold text-sm">{label}</h3>
      </div>
      
      {/* Metrics */}
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center text-muted-foreground">
            <Users className="w-3 h-3 mr-1" />
            Users
          </span>
          <span className="font-semibold text-foreground">
            {metrics.totalUsers.toLocaleString()}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center text-muted-foreground">
            <TrendingUp className="w-3 h-3 mr-1" />
            Completion
          </span>
          <span className="font-semibold text-green-600">
            {metrics.completionRate}%
          </span>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            Avg. Duration
          </span>
          <span className="font-semibold text-foreground">
            {metrics.averageDuration}s
          </span>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center text-muted-foreground">
            <AlertCircle className="w-3 h-3 mr-1" />
            Drop-off
          </span>
          <span className="font-semibold text-red-600">
            {metrics.dropoffRate}%
          </span>
        </div>
      </div>
      
      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  );
});

JourneyNode.displayName = 'JourneyNode';

