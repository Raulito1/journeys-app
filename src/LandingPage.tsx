import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './components/ui/button'
import UnicornScene from 'unicornstudio-react'
import { gsap } from 'gsap'
import { SiteHeader } from './components/SiteHeader'

export function LandingPage() {
  const headlineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!headlineRef.current) return

    const chars = headlineRef.current.querySelectorAll('.headline-char')

    gsap.set(chars, { yPercent: 100 })

    gsap.to(chars, {
      yPercent: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.03,
    })
  }, [])

  const headlineLines = [
    ['INTELLIGENT'],
    ['ANALYTICS,'],
    ['FINALLY.'],
  ]

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <main className="flex-1">
        <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden flex items-stretch">
          {/* Left: Hero content */}
          <div className="flex flex-1 items-end">
            <div className="w-full max-w-5xl px-6 md:px-12 lg:px-24 pb-16 space-y-6">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
                AI-DRIVEN WEBSITE JOURNEYS
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-[1.05]">
                <div ref={headlineRef} className="inline-flex flex-col gap-2">
                  {headlineLines.map((line, lineIndex) => (
                    <div key={lineIndex} className="flex flex-wrap gap-x-3">
                      {line.map((word, wordIndex) => (
                        <div
                          key={word + '-' + wordIndex}
                          className="overflow-hidden flex whitespace-nowrap"
                        >
                          {word.split('').map((char, charIndex) => (
                            <span
                              key={word + '-' + wordIndex + '-' + charIndex}
                              className={
                                'inline-block headline-char ' +
                                (word === 'FINALLY.' ? 'text-primary' : '')
                              }
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                Journeys AI turns messy clickstreams into clear, actionable insights across every user journey,
                KPI, and session replay — without any manual setup.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link to="/app">Try it out</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Unicorn scene */}
          <div className="flex flex-1 items-center justify-center px-6 md:px-10 lg:px-16">
            <UnicornScene projectId="S5bnHhUpS6iOX7iPBXgg" width={800} height={600} />
          </div>
        </section>
      </main>
    </div>
  )
}

