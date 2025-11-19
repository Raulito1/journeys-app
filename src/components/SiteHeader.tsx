import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

export function SiteHeader() {
  const [isDark, setIsDark] = useState<boolean>(true)

  useEffect(() => {
    const root = document.documentElement
    const currentlyDark = root.classList.contains('dark')
    setIsDark(currentlyDark)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    setIsDark((prev) => {
      const next = !prev
      root.classList.toggle('dark', next)
      return next
    })
  }

  return (
    <nav className="w-full px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-primary/90 flex items-center justify-center text-xs font-bold text-primary-foreground shadow-sm">
          JA
        </div>
        <span className="font-semibold tracking-tight text-sm md:text-base">
          Journeys AI
        </span>
      </div>

      <div className="hidden md:flex items-center justify-center gap-8 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">
          Overview
        </Link>
        <Link to="/graphistry" className="hover:text-foreground transition-colors">
          Graphistry
        </Link>
        <Link
          to="/app"
          className="hover:text-foreground transition-colors"
        >
          Dashboard
        </Link>
        <Link to="/thoughtspot" className="hover:text-foreground transition-colors">
          ThoughtSpot
        </Link>
      </div>

      <div className="hidden md:block">
        <Button
          variant="outline"
          size="icon-sm"
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {isDark ? (
            <Sun className="size-4" />
          ) : (
            <Moon className="size-4" />
          )}
        </Button>
      </div>
    </nav>
  )
}

