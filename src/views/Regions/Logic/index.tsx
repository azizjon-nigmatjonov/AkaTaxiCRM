import { useGetQueries } from "../../../hooks/useGetQueries";
import Region from "../Region";

export const breadCrumbsItems = [
  {
    label: "Sozlamalar",
    link: "settings/regions",
  },
  {
    label: "Joylar nomi",
  },
];

export const tabList = [
  {
    slug: "uz",
    name: "O'zbekcha",
  },
  {
    slug: "kr",
    name: "Kril",
  },
  {
    slug: "ru",
    name: "Ruskiy",
  },
];

export const GetCurrentPage = () => {
  const { tab } = useGetQueries();

  const currentPage = () => {
    switch (tab) {
      case "ru":
        return "ru";
      case "kr":
        return "kril";
      default:
        return <Region />;
    }
  };

  return { currentPage };
};
