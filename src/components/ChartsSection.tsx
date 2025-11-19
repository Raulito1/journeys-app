import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { mockChartData } from '../data/mockData.js';

export function ChartsSection() {
  const barChartData = mockChartData.find((c) => c.type === 'bar');
  const lineChartData = mockChartData.find((c) => c.type === 'line');

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6 text-foreground">Charts</h2>
      
      <div className="space-y-8">
        {/* Bar Chart - Journey Completion Rates */}
        {barChartData && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              {barChartData.title}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={barChartData.xAxisKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey={barChartData.yAxisKey}
                  fill="#3b82f6"
                  name="Completion Rate (%)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Line Chart - User Flow Over Time */}
        {lineChartData && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              {lineChartData.title}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={lineChartData.xAxisKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={lineChartData.yAxisKey}
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  name="Users"
                  dot={{ fill: '#8b5cf6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}

