import { getChapters, getCharacters } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ChapterCard from '@/components/ChapterCard'
import CharacterCard from '@/components/CharacterCard'
import Link from 'next/link'

export default async function HomePage() {
  const chapters = await getChapters()
  const characters = await getCharacters()
  const featuredChapter = chapters[0]

  return (
    <div>
      <Hero featuredChapter={featuredChapter} />
      
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-display font-bold text-gradient-blood">Chapters</h2>
          <Link href="/chapters" className="text-blood-500 hover:text-blood-400 transition">View All →</Link>
        </div>
        {chapters.length === 0 ? (
          <p className="text-ink-600">No chapters available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.slice(0, 6).map(chapter => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-ink-700">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-display font-bold text-gradient-blood">Characters</h2>
          <Link href="/characters" className="text-blood-500 hover:text-blood-400 transition">View All →</Link>
        </div>
        {characters.length === 0 ? (
          <p className="text-ink-600">No characters available yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.slice(0, 4).map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}