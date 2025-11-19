# Journeys Analytics Dashboard

A comprehensive analytics dashboard for visualizing user journeys, tracking KPIs, and analyzing customer behavior patterns.

## 🎯 Features

Based on the requirements diagram, this application includes:

### 1. **User Selections Panel**
- Value Stream selection (e.g., USPB Onboarding)
- User Journey filtering
- Date range selection (Start Date, End Date)
- Real-time selection summary

### 2. **Journey Flow Visualization**
- Interactive React Flow diagram showing journey progression
- Custom journey nodes displaying:
  - Total users
  - Completion rate
  - Average duration
  - Drop-off rate
- Animated edges showing flow between journeys
- Mini-map and controls for navigation

### 3. **Session Replay (Graphistry)**
- Placeholder for interactive session replay visualization
- Playback controls (play, pause, skip)
- Session metrics display
- Ready for Graphistry integration

### 4. **KPIs Section**
- Total Conversions
- Overall Completion Rate
- Average Time to Complete
- Drop-off Rate
- Trend indicators (up/down/neutral)
- Period-over-period comparison

### 5. **Insights - Natural Language**
- AI-generated insights about user behavior
- Severity indicators (info, warning, critical)
- Contextual descriptions
- Timestamp tracking
- Journey-specific insights

### 6. **Charts**
- Bar chart: Journey Completion Rates
- Line chart: User Flow Over Time
- Built with Recharts for responsive visualizations
- Customizable data displays

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **@xyflow/react** - Journey flow diagrams
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **date-fns** - Date formatting

## 📋 Prerequisites

**Important:** This project requires Node.js version **20.19+** or **22.12+** due to the use of `rolldown-vite`.

Check your Node.js version:
```bash
node --version
```

If you need to upgrade, visit [nodejs.org](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm).

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── UserSelections.tsx    # User selection panel
│   ├── JourneyFlow.tsx        # React Flow diagram
│   ├── JourneyNode.tsx        # Custom journey node
│   ├── SessionReplay.tsx      # Session replay component
│   ├── KPIsSection.tsx        # KPIs display
│   ├── InsightsSection.tsx    # AI insights
│   └── ChartsSection.tsx      # Charts visualization
├── types/               # TypeScript type definitions
│   └── index.ts
├── data/                # Mock data
│   └── mockData.ts
├── lib/                 # Utilities
│   └── utils.ts
├── App.tsx              # Main application
└── main.tsx             # Entry point
```

## 🎨 Customization

### Adding New Journeys

Edit `src/data/mockData.ts` and add to the `mockJourneys` array:

```typescript
{
  id: 'journey-5',
  name: 'Journey 5',
  description: 'Your description',
  metrics: {
    totalUsers: 5000,
    completionRate: 88.0,
    averageDuration: 150,
    dropoffRate: 12.0,
  },
}
```

### Adding New KPIs

Add to the `mockKPIs` array in `src/data/mockData.ts`:

```typescript
{
  id: 'kpi-5',
  name: 'Your KPI Name',
  value: '42%',
  change: 5.5,
  trend: 'up',
}
```

## 🔧 Configuration

- **Vite Config:** `vite.config.ts`
- **TypeScript:** `tsconfig.app.json`, `tsconfig.json`
- **Tailwind CSS:** `tailwind.config.js`
- **ESLint:** `eslint.config.js`

## 📊 Data Flow

1. User makes selections in the **UserSelections** component
2. Selection state is managed in **App.tsx**
3. Components receive filtered data based on selections
4. Mock data is currently used; replace with API calls as needed

## 🚧 Future Enhancements

- [ ] Connect to real backend API
- [ ] Implement actual Graphistry integration for session replay
- [ ] Add data export functionality
- [ ] Implement real-time data updates
- [ ] Add user authentication
- [ ] Create custom date range presets
- [ ] Add more chart types (pie, area, scatter)
- [ ] Implement journey comparison features
- [ ] Add drill-down capabilities

## 📝 License

MIT
