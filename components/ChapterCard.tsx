import Link from 'next/link'
import { Chapter } from '@/types'

export default function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <Link href={`/chapters/${chapter.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-ink-800 border border-ink-700 group-hover:border-blood-600 transition">
        {chapter.metadata?.cover_image ? (
          <img
            src={`${chapter.metadata.cover_image.imgix_url}?w=800&h=1066&fit=crop&auto=format,compress`}
            alt={chapter.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blood-950 to-ink-900 flex items-center justify-center">
            <span className="text-6xl">🐛</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {chapter.metadata?.chapter_number !== undefined && (
            <p className="text-blood-500 text-xs font-display tracking-widest mb-1">
              CH. {chapter.metadata.chapter_number}
            </p>
          )}
          <h3 className="font-bold text-lg leading-tight line-clamp-2">
            {chapter.metadata?.chapter_title || chapter.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}