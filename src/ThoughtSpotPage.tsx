import { SiteHeader } from './components/SiteHeader'

export function ThoughtSpotPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full text-center bg-card border border-border rounded-2xl shadow-sm px-6 py-10 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">THOUGHTSPOT</p>
          <h1 className="text-2xl md:text-3xl font-semibold">ThoughtSpot integration coming soon</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Soon you&apos;ll be able to explore Journeys AI insights directly with ThoughtSpot.
            This page will host that experience.
          </p>
        </div>
      </main>
    </div>
  )
}

