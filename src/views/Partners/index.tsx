import { useCallback, useMemo } from "react";
import AddButton from "../../components/Buttons/AddButton";
import CTable from "../../components/CElements/CTable";
import FilterButton from "../../components/Filters";
import SectionHeader from "../../components/Sections/Header";
import usePageRouter from "../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import partnerService from "../../services/partners";
import ImageFrame from "../../components/ImageFrame";
import CSelect from "../../components/CElements/CSelect";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header";

const Partners = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const regions = useSelector((state: any) => state.regions.regions);

  const { data: partnerData, isLoading } = useQuery(["GET_PARTNERS"], () => {
    return partnerService.getList();
  });

  const partnersInfo: any = useMemo(() => {
    return (
      {
        list: partnerData?.data?.map((i: any) => {
          return {
            ...i,
            company: {
              image: i.image,
              name: i.company_name,
            },
          };
        }),
        ...partnerData,
      } ?? {}
    );
  }, [partnerData]);

  const handleSearch = () => {};

  const headColumns = useMemo(() => {
    return [
      {
        title: "tashkilot nomi",
        id: "company",
        render: (val: any) => {
          return (
            val && (
              <div className="flex items-center space-x-2">
                <ImageFrame image={val?.image} />
                <span>{val?.name}</span>
              </div>
            )
          );
        },
      },
      {
        title: "login",
        id: "login",
      },
      {
        title: "Tel.raqam",
        id: "phone",
      },
      {
        title: "Ism familiya",
        id: "name",
      },
      {
        title: "homiy viloyati",
        id: "region",
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
      navigateTo(`/partners/partner?id=${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
    }
  }, []);

  const handleRowClick = (item: any) => {
    navigateTo(`/partners/partner?id=${item.id}`);
  };

  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);

  return (
    <>
      <Header title="Adminlar" />
      <div className="px-5">
        <SectionHeader handleSearch={handleSearch}>
          <div className="flex items-center gap-3">
            <FilterButton text="filter">
              <div>
                <CSelect options={Regions} id="filter" label="Viloyat" />
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
          bodyColumns={partnersInfo?.list}
          count={1}
          handleActions={handleActions}
          handleRowClick={handleRowClick}
          isLoading={isLoading}
          currentPage={1}
          clickable={true}
        />
      </div>
    </>
  );
};

export default Partners;
