export const groupParams = (parameters: any[] | null) => {
  const groups = (parameters || []).reduce((carry: any, item: any) => {
    return {
      ...carry,
      [item.in]: [...(carry[item.in] || []), item],
    };
  }, {});

  return {
    headers: groups['header'] || [],
    queries: groups['query'] || [],
    paths: groups['path'] || [],
  };
};
