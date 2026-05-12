// app/chapters/[slug]/page.tsx
import { getChapter, getPanelsByChapter, getChapters } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PanelReader from '@/components/PanelReader'
import Link from 'next/link'

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const chapter = await getChapter(slug)
  if (!chapter) notFound()

  const panels = await getPanelsByChapter(chapter.id)
  const allChapters = await getChapters()
  const currentIndex = allChapters.findIndex(c => c.id === chapter.id)
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null

  return (
    <div>
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {chapter.metadata?.cover_image && (
          <img
            src={`${chapter.metadata.cover_image.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
            alt={chapter.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 h-full flex flex-col justify-end pb-12">
          {chapter.metadata?.chapter_number !== undefined && (
            <p className="text-blood-500 font-display tracking-widest mb-2">
              CHAPTER {chapter.metadata.chapter_number}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            {chapter.metadata?.chapter_title || chapter.title}
          </h1>
          {chapter.metadata?.synopsis && (
            <p className="text-lg text-ink-600 max-w-2xl">{chapter.metadata.synopsis}</p>
          )}
        </div>
      </div>

      <PanelReader panels={panels} />

      {chapter.metadata?.full_story && (
        <div className="max-w-3xl mx-auto px-4 py-16 border-t border-ink-700">
          <h2 className="text-2xl font-display font-bold mb-6 text-blood-500">Full Story</h2>
          <div className="prose prose-invert max-w-none whitespace-pre-wrap text-ink-600 leading-relaxed">
            {chapter.metadata.full_story}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 py-12 flex justify-between border-t border-ink-700">
        {prevChapter ? (
          <Link href={`/chapters/${prevChapter.slug}`} className="text-blood-500 hover:text-blood-400 transition">
            ← Previous Chapter
          </Link>
        ) : <div />}
        {nextChapter ? (
          <Link href={`/chapters/${nextChapter.slug}`} className="text-blood-500 hover:text-blood-400 transition">
            Next Chapter →
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}