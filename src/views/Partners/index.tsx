import { useCallback, useMemo } from "react";
import AddButton from "../../components/Buttons/AddButton";
import CSlider from "../../components/CElements/CSlider";
import CTable from "../../components/CElements/CTable";
import FilterButton from "../../components/Filters";
import SectionHeader from "../../components/Sections/Header";
import usePageRouter from "../../hooks/useObjectRouter";

const Partners = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const handleSearch = () => {};

  const headColumns = useMemo(() => {
    return [
      {
        title: "tashkilot nomi",
        id: "partners_name",
      },
      {
        title: "login",
        id: "login",
      },
      {
        title: "Ism familiya",
        id: "full_name"
      },
      {
        title: "homiy viloyati",
        id: "partners_region",
      },
      {
        title: "",
        id: "actions",
        permission: ["learn_more", "edit", "delete"],
      },
    ];
  }, []);

  const handleActions = useCallback((status: string, element: any) => {
    if (status === "learn_more") {
      navigateTo(`/drivers/driver/${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
    }
  }, []);

  const handleRowClick = (item: any) => {
    navigateTo(`/partners/partner/${item.id}`);
  };

  return (
    <>
      <SectionHeader handleSearch={handleSearch}>
        <div className="flex items-center gap-3">
          <FilterButton text="filter">
            <div>
              <CSlider />
            </div>
          </FilterButton>

          <AddButton
            text="Yangi hamkor"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>

      <CTable
        headColumns={headColumns}
        bodyColumns={[]}
        count={1}
        handleActions={handleActions}
        handleRowClick={handleRowClick}
        isLoading={false}
        currentPage={1}
      />
    </>
  );
};

export default Partners;
