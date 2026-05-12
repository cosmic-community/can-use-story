import { createBucketClient } from '@cosmicjs/sdk'
import { Chapter, Panel, Character } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  return ''
}

export async function getChapters(): Promise<Chapter[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'chapters' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const chapters = response.objects as Chapter[]
    return chapters.sort((a, b) => {
      const numA = a.metadata?.chapter_number || 0
      const numB = b.metadata?.chapter_number || 0
      return numA - numB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch chapters')
  }
}

export async function getChapter(slug: string): Promise<Chapter | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'chapters', slug })
      .depth(1)
    return response.object as Chapter
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch chapter')
  }
}

export async function getPanelsByChapter(chapterId: string): Promise<Panel[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'panels', 'metadata.chapter': chapterId })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const panels = response.objects as Panel[]
    return panels.sort((a, b) => {
      const orderA = a.metadata?.panel_order || 0
      const orderB = b.metadata?.panel_order || 0
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch panels')
  }
}

export async function getCharacters(): Promise<Character[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'characters' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Character[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch characters')
  }
}

export async function getCharacter(slug: string): Promise<Character | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'characters', slug })
      .depth(1)
    return response.object as Character
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch character')
  }
}