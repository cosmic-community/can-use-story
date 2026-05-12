// app/characters/[slug]/page.tsx
import { getCharacter } from '@/lib/cosmic'
import { notFound } from 'next/navigation'

export default async function CharacterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const character = await getCharacter(slug)
  if (!character) notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          {character.metadata?.portrait ? (
            <img
              src={`${character.metadata.portrait.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
              alt={character.title}
              className="w-full rounded-lg shadow-2xl border border-blood-900"
            />
          ) : (
            <div className="aspect-[4/5] bg-ink-800 rounded-lg flex items-center justify-center">
              <span className="text-ink-600">No portrait</span>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-5xl font-display font-bold mb-2 text-gradient-blood">
            {character.metadata?.name || character.title}
          </h1>
          {character.metadata?.role && (
            <p className="text-blood-500 tracking-widest text-sm font-semibold mb-6 uppercase">
              {character.metadata.role}
            </p>
          )}
          <div className="space-y-4 mb-6">
            {character.metadata?.cultivation_realm && (
              <div>
                <p className="text-ink-600 text-sm uppercase tracking-wider mb-1">Cultivation Realm</p>
                <p className="text-lg">{character.metadata.cultivation_realm}</p>
              </div>
            )}
            {character.metadata?.affiliation && (
              <div>
                <p className="text-ink-600 text-sm uppercase tracking-wider mb-1">Affiliation</p>
                <p className="text-lg">{character.metadata.affiliation}</p>
              </div>
            )}
          </div>
          {character.metadata?.biography && (
            <div className="border-t border-ink-700 pt-6">
              <h2 className="text-2xl font-display font-bold mb-4 text-blood-500">Biography</h2>
              <p className="text-ink-600 leading-relaxed whitespace-pre-wrap">{character.metadata.biography}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}