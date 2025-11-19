// Core data types for the Journeys app

export interface Journey {
  id: string;
  name: string;
  description?: string;
  metrics: JourneyMetrics;
}

export interface JourneyMetrics {
  totalUsers: number;
  completionRate: number;
  averageDuration: number;
  dropoffRate: number;
}

export interface ValueStream {
  id: string;
  name: string;
  description?: string;
}

export interface UserSelection {
  valueStream: ValueStream | null;
  userJourney: Journey | null;
  startDate: Date | null;
  endDate: Date | null;
}

export interface KPI {
  id: string;
  name: string;
  value: number | string;
  change?: number; // percentage change
  trend?: 'up' | 'down' | 'neutral';
  unit?: string;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  severity?: 'info' | 'warning' | 'critical';
  timestamp: Date;
  relatedJourneyId?: string;
}

export interface ChartData {
  id: string;
  type: 'line' | 'bar' | 'area' | 'pie';
  title: string;
  data: any[]; // Will be specific to chart type
  xAxisKey?: string;
  yAxisKey?: string;
}

export interface SessionReplayData {
  sessionId: string;
  userId: string;
  journeyId: string;
  timestamp: Date;
  events: SessionEvent[];
}

export interface SessionEvent {
  id: string;
  type: string;
  timestamp: Date;
  data: Record<string, any>;
}

// Node types for React Flow
export interface JourneyNode {
  id: string;
  type: 'journey';
  position: { x: number; y: number };
  data: {
    label: string;
    journey: Journey;
    metrics: JourneyMetrics;
  };
}

export interface JourneyEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
}

