import { getChapters } from '@/lib/cosmic'
import ChapterCard from '@/components/ChapterCard'

export default async function ChaptersPage() {
  const chapters = await getChapters()
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-display font-bold mb-2 text-gradient-blood">All Chapters</h1>
      <p className="text-ink-600 mb-12">The complete saga of Myriad Hive Dao</p>
      {chapters.length === 0 ? (
        <p className="text-ink-600">No chapters available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map(chapter => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      )}
    </div>
  )
}