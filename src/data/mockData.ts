import type { Journey, ValueStream, KPI, Insight, ChartData } from '../types/index.js';

export const mockValueStreams: ValueStream[] = [
  {
    id: 'vs-1',
    name: 'USPB Onboarding',
    description: 'US Private Banking customer onboarding flow',
  },
  {
    id: 'vs-2',
    name: 'Retail Banking',
    description: 'Retail banking customer journey',
  },
];

export const mockJourneys: Journey[] = [
  {
    id: 'journey-1',
    name: 'Journey 1 (Intake)',
    description: 'Initial customer intake process',
    metrics: {
      totalUsers: 12450,
      completionRate: 78.5,
      averageDuration: 245,
      dropoffRate: 21.5,
    },
  },
  {
    id: 'journey-2',
    name: 'Journey 2 (Account Onboarding)',
    description: 'Account creation and onboarding',
    metrics: {
      totalUsers: 9780,
      completionRate: 85.2,
      averageDuration: 180,
      dropoffRate: 14.8,
    },
  },
  {
    id: 'journey-3',
    name: 'Journey 3',
    description: 'Product selection and configuration',
    metrics: {
      totalUsers: 8330,
      completionRate: 92.1,
      averageDuration: 120,
      dropoffRate: 7.9,
    },
  },
  {
    id: 'journey-4',
    name: 'Journey 4',
    description: 'Final verification and activation',
    metrics: {
      totalUsers: 7670,
      completionRate: 96.8,
      averageDuration: 90,
      dropoffRate: 3.2,
    },
  },
];

export const mockKPIs: KPI[] = [
  {
    id: 'kpi-1',
    name: 'Total Conversions',
    value: 7670,
    change: 12.5,
    trend: 'up',
    unit: 'users',
  },
  {
    id: 'kpi-2',
    name: 'Overall Completion Rate',
    value: '61.6%',
    change: 5.2,
    trend: 'up',
  },
  {
    id: 'kpi-3',
    name: 'Avg. Time to Complete',
    value: '635s',
    change: -8.3,
    trend: 'down',
  },
  {
    id: 'kpi-4',
    name: 'Drop-off Rate',
    value: '38.4%',
    change: -3.1,
    trend: 'down',
  },
];

export const mockInsights: Insight[] = [
  {
    id: 'insight-1',
    title: 'High drop-off in Journey 1',
    description: 'Users are experiencing a 21.5% drop-off rate during the intake process. Primary friction points identified in the document upload step.',
    severity: 'warning',
    timestamp: new Date('2025-11-18T10:30:00'),
    relatedJourneyId: 'journey-1',
  },
  {
    id: 'insight-2',
    title: 'Improved completion in Journey 4',
    description: 'Journey 4 shows excellent completion rates at 96.8%, indicating smooth final verification process.',
    severity: 'info',
    timestamp: new Date('2025-11-18T09:15:00'),
    relatedJourneyId: 'journey-4',
  },
  {
    id: 'insight-3',
    title: 'Mobile vs Desktop performance gap',
    description: 'Mobile users show 15% lower completion rates across all journeys. Consider optimizing mobile experience.',
    severity: 'critical',
    timestamp: new Date('2025-11-17T14:20:00'),
  },
];

export const mockChartData: ChartData[] = [
  {
    id: 'chart-1',
    type: 'bar',
    title: 'Journey Completion Rates',
    data: [
      { name: 'Journey 1', completionRate: 78.5 },
      { name: 'Journey 2', completionRate: 85.2 },
      { name: 'Journey 3', completionRate: 92.1 },
      { name: 'Journey 4', completionRate: 96.8 },
    ],
    xAxisKey: 'name',
    yAxisKey: 'completionRate',
  },
  {
    id: 'chart-2',
    type: 'line',
    title: 'User Flow Over Time',
    data: [
      { date: '2025-11-12', users: 12450 },
      { date: '2025-11-13', users: 11200 },
      { date: '2025-11-14', users: 10800 },
      { date: '2025-11-15', users: 9780 },
      { date: '2025-11-16', users: 8900 },
      { date: '2025-11-17', users: 8330 },
      { date: '2025-11-18', users: 7670 },
    ],
    xAxisKey: 'date',
    yAxisKey: 'users',
  },
];

