import qs from "qs";

interface Filters {
  id: {
    $in: {
      [key: number]: number;
    };
  };
}

export default function generateQueryString(ids: number[]) {
  const filters: Filters = {
    id: {
      $in: {},
    },
  };
  
  if (ids.length <= 0) return `products?filters[id][$eq]=-1`;
  ids.forEach((id, index) => {
    filters.id.$in[index] = id;
  });

  const query = qs.stringify(
    {
      filters,
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return `products?${query}`;
}
