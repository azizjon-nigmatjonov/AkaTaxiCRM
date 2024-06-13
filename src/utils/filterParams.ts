export const filterParams = (params: any) => {
  let myObject: any = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      myObject[key] = value;
    }
  });

  return myObject;
};
