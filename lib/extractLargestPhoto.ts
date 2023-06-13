import { Cover } from "@/types/types";

export function extractLargestPhoto(cover: Cover) {
  // Get the formats object
  const formats = cover.data.attributes.formats;

  // Initialize the largest photo with the base photo
  let largestPhoto = {
    alternativeText: cover.data.attributes.alternativeText,
    url: cover.data.attributes.url,
    size: cover.data.attributes.size,
  };

  // Iterate over the formats
  for (const format in formats) {
    // If the current format is larger than the largest photo, update the largest photo
    if (formats[format].size > largestPhoto.size) {
      largestPhoto = {
        alternativeText:
          formats[format].alternativeText ||
          cover.data.attributes.alternativeText,
        url: formats[format].url,
        size: formats[format].size,
      };
    }
  }

  // Return the largest photo
  return largestPhoto;
}
