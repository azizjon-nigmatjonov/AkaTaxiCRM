import AddButton from "../../../components/UI/Buttons/AddButton";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { RouteList } from "./List";
import { useState } from "react";
import { RouteCreate } from "./List/RouteCreate";
import { FetchFunction } from "./List/Logic";

export const breadCrumbs = [
  { label: "Routes", link: "/admins/routes" },
  { label: "Routes sahifasi" },
];

export const RoutePage = () => {
  const [open, setOpen] = useState(false);
  const { newRouteList, refetch, isLoading } = FetchFunction();

  const handleClose = () => {
    setOpen(false)
    refetch()
  }

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
          <div className="fixed top-[90px] right-20px">
            <AddButton onClick={() => setOpen(true)} iconLeft={true} text="Route yaratish" />
          </div>
        </div>

        <RouteList isLoading={isLoading} handleClose={handleClose} newRouteList={newRouteList} />
      </div>

      {open && <RouteCreate handleClose={handleClose} newRouteList={newRouteList} />}
    </>
  );
};
