import { Cover, Covers, CoverAttributes } from "@/types/types";

//Singular
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

//Plural
export function extractLastPhotos(covers: Covers) {
  // Initialize the largest photo with empty values
  let largestPhoto = {
    url: "",
    alternativeText: "",
    size: 0,
  };

  if (covers && covers.data) {
    for (let cover of covers.data) {
      const { attributes } = cover;
      const formats = attributes.formats;

      // Iterate over all formats for the current cover
      for (let format in formats) {
        if (formats[format].height > largestPhoto.size) {
          largestPhoto = {
            url: formats[format].url,
            alternativeText: attributes.alternativeText,
            size: formats[format].height,
          };
        }
      }
    }
  }

  return largestPhoto;
}

export function extractAllPhotos(covers: Covers | undefined) {
  let largestPhotos = [];

  if (covers && covers.data) {
    for (let cover of covers.data) {
      const { attributes } = cover;
      const formats = attributes.formats;

      // Initialize the largest photo for this cover with empty values
      let largestPhoto = {
        url: "",
        alternativeText: "",
        size: 0,
      };

      // Iterate over all formats for the current cover
      for (let format in formats) {
        if (formats[format].height > largestPhoto.size) {
          largestPhoto = {
            url: formats[format].url,
            alternativeText: attributes.alternativeText,
            size: formats[format].height,
          };
        }
      }

      // After finding the largest photo in the current cover, add it to the list
      largestPhotos.push(largestPhoto);
    }
  }

  return largestPhotos;
}

export const getLargestImageUrl = (image: CoverAttributes) => {
  let largestFormat = image.formats.thumbnail;

  for (let formatName in image.formats) {
    if (
      image.formats[formatName].width * image.formats[formatName].height >
      largestFormat.width * largestFormat.height
    ) {
      largestFormat = image.formats[formatName];
    }
  }

  return {
    alternativeText: image.alternativeText,
    url: largestFormat.url,
  };
};
