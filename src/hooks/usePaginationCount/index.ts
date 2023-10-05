export const usePaginationCount = (count: number, limit: number) => {
  if (!count) return 1;
  return {count, tableCount: count > limit ? Math.ceil(count / limit) : 1};
};
