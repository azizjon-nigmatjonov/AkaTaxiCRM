export const GetRoutes = () => {
  const allRoutes = (routes: any) => {
    let arr = [];
    for (let key in routes) {
      arr.push(...routes[key]);
    }

    return arr;
  };

  return { allRoutes };
};

export const breadCrumbsItems = [
  {
    label: "Admin",
    link: "/admins/admin",
  },
  {
    label: "Rollar",
    link: "/admins/rolls",
  },
  {
    label: "Yangi rol yaratish",
  },
];
