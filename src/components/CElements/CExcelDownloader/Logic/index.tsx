export const FetchFunction = () => {
  const downloadExcel = (data: any) => {
    const url = new URL("https://newapi.akataxi.uz/users/export");
    const params: any = {
      region_id: data?.region_id?.length
        ? data?.region_id
            ?.map((item: { value: number }) => item.value)
            ?.join(",")
        : data?.region?.map((item: { value: number }) => item.value)?.join(","),
      gender: data?.gender?.value,
      date: data?.date?.map((item: string) => item)?.join(","),
      device_type: data?.device_type?.value,
      version: data?.version?.value,
      type: data?.type,
    };

    for (let key in params) {
      if (!params[key]) {
        delete params[key];
      }
    }

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    window.open(url, "_blank");
  };

  return { downloadExcel };
};
