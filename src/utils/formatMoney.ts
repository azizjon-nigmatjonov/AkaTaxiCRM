export const FormatMoney = (value: any) => {
  return value.toLocaleString("en-US");
};

export const ReFormatMoney = (value: any) => {
  return value.replace(/[ ,]/g, " ");
};
