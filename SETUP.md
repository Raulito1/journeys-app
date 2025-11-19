# Setup Guide for Journeys Analytics Dashboard

## ⚠️ Important: Node.js Version Requirement

This project requires **Node.js 20.19+** or **22.12+** because it uses `rolldown-vite`.

### Check Your Current Node.js Version

```bash
node --version
```

### If You Need to Upgrade Node.js

#### Option 1: Using NVM (Recommended)

1. Install NVM if you don't have it:
   - macOS/Linux: https://github.com/nvm-sh/nvm
   - Windows: https://github.com/coreybutler/nvm-windows

2. Install and use Node.js 22:
```bash
nvm install 22
nvm use 22
```

#### Option 2: Direct Download

Download the latest LTS version from [nodejs.org](https://nodejs.org/)

## 🚀 Installation Steps

Once you have the correct Node.js version:

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
   - The app will be available at `http://localhost:5173` (or another port if 5173 is in use)

## 🎨 What You'll See

The dashboard includes:

1. **Left Sidebar:** User selections (Value Stream, Journey, Date Range)
2. **Top Section:** Interactive Journey Flow diagram
3. **Middle Section:** Three columns with:
   - Session Replay visualization
   - KPIs metrics
   - AI-generated Insights
4. **Bottom Section:** Charts (Bar chart and Line chart)

## 🔧 Troubleshooting

### Issue: "Vite requires Node.js version 20.19+ or 22.12+"

**Solution:** Upgrade your Node.js version (see above)

### Issue: Port 5173 is already in use

**Solution:** Vite will automatically try the next available port, or you can specify a port:
```bash
npm run dev -- --port 3000
```

### Issue: Module not found errors

**Solution:** Delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Next Steps

1. **Explore the code:** Check out the components in `src/components/`
2. **Modify mock data:** Edit `src/data/mockData.ts` to customize journeys and metrics
3. **Add real data:** Replace mock data with API calls
4. **Customize styling:** Modify Tailwind classes or add custom CSS

## 🎯 Key Files to Understand

- `src/App.tsx` - Main application layout
- `src/components/JourneyFlow.tsx` - React Flow diagram
- `src/data/mockData.ts` - Sample data
- `src/types/index.ts` - TypeScript type definitions

## 💡 Tips

- The app uses **hot module replacement (HMR)**, so changes will appear instantly
- Check the browser console for any errors or warnings
- Use React DevTools browser extension for debugging

## 🆘 Need Help?

If you encounter issues:
1. Check that you're using Node.js 20.19+ or 22.12+
2. Make sure all dependencies are installed (`npm install`)
3. Clear your browser cache
4. Check the terminal for error messages

