// export type Category = {
//   id: number;
//   attributes: {
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     title: string;
//     slug: string;
//   };
// };

// export type FlyoutProps = {
//   data: CategoryTag;
// };

// export type SecondaryHeaderProps = {
//   data: CategoryTag;
// };

// export type CategoryTag = {
//   data: CategoryTagItem[];
// };

// export type CategoryTagItem = {
//   id: number;
//   attributes: {
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     title: string;
//     slug: string;
//     categories: {
//       data: Category[];
//     };
//   };
// };

// export type CategoryProps = CategoryTag;

// export interface Page {
//   id: number;
//   attributes: {
//     title: string;
//     slug: string;
//   };
// }

// export interface Navigation {
//   pages: Page[];
// }

// export type NavigationData = {
//   data: NavigationItem[];
//   meta: {
//     pagination: {
//       page: number;
//       pageSize: number;
//       pageCount: number;
//       total: number;
//     };
//   };
// };

// export type NavigationItem = {
//   id: number;
//   attributes: {
//     title: string;
//     slug: string | null;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     categories: {
//       data: Category[];
//     };
//   };
// };

// interface Feature {
//   data: null;
// }

// interface Attributes {
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   slug: string;
//   title: string;
//   feature: Feature;
// }

// interface Data {
//   id: number;
//   attributes: Attributes;
// }

// interface CategoryTags {
//   data: Data[];
// }

// interface CategoryAttributes extends Attributes {
//   category_tags: CategoryTags;
// }

// interface CategoryData {
//   id: number;
//   attributes: CategoryAttributes;
// }

// interface Categories {
//   data: CategoryData[];
// }

// interface MainAttributes extends Attributes {
//   categories: Categories;
// }

// interface MainData {
//   id: number;
//   attributes: MainAttributes;
// }

// interface RootObject {
//   data: MainData[];
// }

export type Page = {
  data: {
    id: number;
    attributes: PageAttributes;
  }[];
};

export type PageAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  categories: Category[];
};

export type Category = {
  data: {
    id: number;
    attributes: CategoryAttribute[];
  }[];
};

export type CategoryAttribute = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  category_tags: CategoryTag[];
};

export type CategoryTag = {};

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
  [key: string]: Format; // This line allows for additional formats
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
