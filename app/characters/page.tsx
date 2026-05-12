import { getCharacters } from '@/lib/cosmic'
import CharacterCard from '@/components/CharacterCard'

export default async function CharactersPage() {
  const characters = await getCharacters()
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-display font-bold mb-2 text-gradient-blood">Characters</h1>
      <p className="text-ink-600 mb-12">The cast of Myriad Hive Dao</p>
      {characters.length === 0 ? (
        <p className="text-ink-600">No characters available yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  )
}