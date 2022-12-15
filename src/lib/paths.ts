export const filterByTag = (paths: any, tag: string): any[] => {
  let endpoints: any[] = [];

  Object.keys(paths).map((path) => {
    const resourcePath = paths[path];

    Object.keys(paths[path]).map((method) => {
      const tags = resourcePath[method].tags;

      if (tags[0] === tag) {
        endpoints = [
          ...endpoints,
          {
            method: method,
            name: path,
            ...resourcePath[method],
          },
        ];
      }
    });
  });

  return endpoints;
};
