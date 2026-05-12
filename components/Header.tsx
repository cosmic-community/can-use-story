import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink-900/95 backdrop-blur border-b border-blood-900/50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐛</span>
          <span className="font-display font-bold text-lg text-gradient-blood tracking-wider">
            MYRIAD HIVE DAO
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/chapters" className="text-sm font-semibold text-ink-600 hover:text-blood-500 transition uppercase tracking-wider">
            Chapters
          </Link>
          <Link href="/characters" className="text-sm font-semibold text-ink-600 hover:text-blood-500 transition uppercase tracking-wider">
            Characters
          </Link>
        </nav>
      </div>
    </header>
  )
}