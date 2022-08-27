export const filterByTag = (data: any, tag: string): any[] => {
  let endpoints: any[] = [];

  Object.keys(data.paths).map(path => {
    const resourcePath = data.paths[path];

    Object.keys(data.paths[path]).map((method) => {
      const tags = resourcePath[method].tags;

      if (tags[0] === tag) {
        endpoints = [
          ...endpoints,
          {
            method: method,
            path: path,
            ...resourcePath[method]
          }
        ]
      }
    });
  });

  return endpoints;
}
