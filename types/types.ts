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

export type CategoryAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  category_tags: CategoryTag;
};

//CategoryTag
export type CategoryTag = {
  data: CategoryTagData[];
};

export type CategoryTagData = {
  id: number;
  attributes: CategoryTagAttributes;
};

export type CategoryTagAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  feature: Feature;
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

export interface Covers {
  data: CoverData[];
}

//Product
export type ProductAttributes = {
  title: string;
  slug: string;
  price: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  covers: any;
};

export type Product = {
  id: number;
  attributes: ProductAttributes;
};

export type Products = {
  data: Product[];
};

//Showcase
export type Home = {
  data: {
    id: number;
    attributes: HomeAttributes;
  };
};

export type HomeAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured_products: Products;
  meta_data: MetaData;
  features: Features;
  call_to_action: CallToAction;
};

export type MetaData = {
  id: number;
  meta_title: string;
  meta_description: string;
  indexed: boolean;
};

export type CallToAction = {
  id: number;
  short_heading: string;
  large_heading: string;
  short_description: string;
  button_text: string;
  cover: CoverData;
};

export type CallToActionData = CallToAction[];

//Feature
export type Features = { data: FeaturesData[] };

export type Feature = {
  data: {
    id: number;
    attributes: FeatureAttributes;
  };
};

export type FeaturesData = {
  id: number;
  attributes: FeatureAttributes;
};

type FeatureAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Cover;
  category_tag: { data: CategoryTagData };
};

//Button
export type Button = {
  classes?: string;
  children: string;
  onClick: () => void;
  link?: string;
};
