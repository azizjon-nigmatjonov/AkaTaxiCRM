export const usePaginationCount = (count: number, limit?: number) => {
 console.log(limit);
 
  if (!count) return 1;
  return {count, tableCount: count};
  // return {count, tableCount: count > limit ? Math.ceil(count / limit) : 1};
};
