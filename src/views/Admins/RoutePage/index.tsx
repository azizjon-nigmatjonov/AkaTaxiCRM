import AddButton from "../../../components/UI/Buttons/AddButton";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { RouteList } from "./List";
import { RouteCreate } from "./List/RouteCreate";
import { FetchFunction } from "./List/Logic";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useGetQueries } from "../../../hooks/useGetQueries";

export const breadCrumbs = [
  { label: "Routes", link: "/admins/routes" },
  { label: "Routes sahifasi" },
];

export const RoutePage = () => {
  const { navigateQuery } = usePageRouter()
  const { modal } = useGetQueries()
  const { newRouteList, refetch, isLoading } = FetchFunction();

  const handleClose = () => {
    navigateQuery({ modal: "", active: "" })
    refetch();
  };

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>

      <div className="container">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[#101828] text-lg font-semibold">
              Yangi route va permission yaratish
            </h1>
            <p className="text-[#475467] text-sm font-normal">
              Permission boshqaruvi uchun yangi rol va permission yaratish
              sahifasi
            </p>
          </div>
          <div>
            <AddButton
              onClick={() => navigateQuery({ modal: 'open' })}
              iconLeft={true}
              text="Route qo'shish"
            />
          </div>
        </div>

        <RouteList
          isLoading={isLoading}
          handleClose={handleClose}
          newRouteList={newRouteList}
        />
      </div>

      {modal && (
        <RouteCreate handleClose={handleClose} newRouteList={newRouteList} />
      )}
    </>
  );
};