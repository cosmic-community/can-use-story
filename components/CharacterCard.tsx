import Link from 'next/link'
import { Character } from '@/types'

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link href={`/characters/${character.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-ink-800 border border-ink-700 group-hover:border-blood-600 transition">
        {character.metadata?.portrait ? (
          <img
            src={`${character.metadata.portrait.imgix_url}?w=600&h=800&fit=crop&auto=format,compress`}
            alt={character.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blood-950 to-ink-900 flex items-center justify-center">
            <span className="text-5xl">👤</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-bold text-base leading-tight">
            {character.metadata?.name || character.title}
          </h3>
          {character.metadata?.role && (
            <p className="text-blood-500 text-xs mt-1 uppercase tracking-wider">
              {character.metadata.role}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}