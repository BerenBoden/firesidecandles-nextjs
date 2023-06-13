//Page
export type Page = {
  data: {
    id: number;
    attributes: PageAttributes;
  }[];
};

type PageAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  categories: Category[];
};

//Category
export type Category = {
  data: {
    id: number;
    attributes: CategoryAttributes;
  }[];
};

export type CategoryTag = {
  data: CategoryTagData[];
};

export type CategoryTagData = {
  id: number;
  attributes: CategoryTagAttributes;
};

export type CategoryAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  category_tags: CategoryTag;
};

export type CategoryTagAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  feature: any;
};

//Image
interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  alternativeText: string;
  provider_metadata: ProviderMetadata;
}

interface Formats {
  small: Format;
  medium: Format;
  thumbnail: Format;
  [key: string]: Format;
}

interface CoverAttributes {
  name: string;
  alternativeText: string;
  caption: string | null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
}

interface CoverData {
  id: number;
  attributes: CoverAttributes;
}

export interface Cover {
  data: CoverData;
}
