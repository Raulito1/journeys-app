import { SiteHeader } from './components/SiteHeader'

// TODO: Replace this with your actual Graphistry embed/share URL
const GRAPHISTRY_EMBED_URL = 'https://www.graphistry.com'

export function GraphistryPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-6xl space-y-6">
          <header className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">GRAPHISTRY</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
              Visual journey analytics in Graphistry
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              This view is rendered directly from your Graphistry workspace. Use it to explore user journeys,
              spot anomalies, and drill into paths with high drop-off.
            </p>
          </header>

          <section className="bg-card border border-border rounded-2xl shadow-sm p-3 md:p-4">
            <div className="relative w-full aspect-[16/9] bg-muted rounded-xl overflow-hidden">
              <iframe
                src={GRAPHISTRY_EMBED_URL}
                title="Graphistry journey visualization"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

