import Link from 'next/link'
import { Chapter } from '@/types'

export default function Hero({ featuredChapter }: { featuredChapter?: Chapter }) {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {featuredChapter?.metadata?.cover_image ? (
        <img
          src={`${featuredChapter.metadata.cover_image.imgix_url}?w=2400&h=1600&fit=crop&auto=format,compress`}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blood-950 via-ink-900 to-black" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/40" />
      <div className="absolute inset-0 scanlines opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-blood-500 font-display tracking-[0.3em] text-sm mb-4 uppercase">
          A Dark Cultivation Tale
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 text-gradient-blood drop-shadow-2xl">
          MYRIAD HIVE DAO
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Li Shen was the weakest disciple of the Black Iron Sect. Until the day the mountain
          collapsed and something <span className="text-blood-500 italic">ancient</span> chose him as its host.
        </p>
        <div className="flex gap-4 justify-center">
          {featuredChapter && (
            <Link
              href={`/chapters/${featuredChapter.slug}`}
              className="bg-blood-600 hover:bg-blood-700 text-white px-8 py-3 rounded font-semibold tracking-wider uppercase text-sm transition shadow-lg shadow-blood-900/50"
            >
              Start Reading
            </Link>
          )}
          <Link
            href="/chapters"
            className="border border-blood-600 text-blood-500 hover:bg-blood-600 hover:text-white px-8 py-3 rounded font-semibold tracking-wider uppercase text-sm transition"
          >
            All Chapters
          </Link>
        </div>
      </div>
    </section>
  )
}