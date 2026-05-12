export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Character extends CosmicObject {
  type: 'characters';
  metadata: {
    name?: string;
    portrait?: { url: string; imgix_url: string };
    cultivation_realm?: string;
    affiliation?: string;
    role?: string;
    biography?: string;
  };
}

export interface Chapter extends CosmicObject {
  type: 'chapters';
  metadata: {
    chapter_title?: string;
    chapter_number?: number;
    cover_image?: { url: string; imgix_url: string };
    synopsis?: string;
    full_story?: string;
    featured_characters?: Character[];
  };
}

export interface Panel extends CosmicObject {
  type: 'panels';
  metadata: {
    panel_title?: string;
    panel_order?: number;
    panel_image?: { url: string; imgix_url: string };
    caption?: string;
    dialogue?: string;
    chapter?: Chapter;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}