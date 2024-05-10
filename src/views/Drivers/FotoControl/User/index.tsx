<<<<<<< HEAD
import { useMemo } from "react";
import { useQuery } from "react-query";
import { Header } from "../../../../components/UI/Header";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import driverService from "../../../../services/drivers";
import DriverInfo from "./Info";
import StickerControl from "./StickerControl";
import StickerHistory from "./StickerHistory";
import { useParams } from "react-router-dom";

const FotoControlUser = () => {
  const { id } = useParams();

  const { data: fotoControl } = useQuery(
    ["GET_FOTOCONTROL_USER", id],
    () => {
      return driverService.getFotoControlUser(id);
    },
    { enabled: !!id }
  );
=======
import { useMemo } from "react"
import { useQuery } from "react-query"
import { Header } from "../../../../components/UI/Header"
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs"
import driverService from "../../../../services/drivers"
import DriverInfo from "./Info"
import StickerControl from "./StickerControl"
import StickerHistory from "./StickerHistory"
import { useParams } from "react-router-dom"


const FotoControlUser = () => {
    const { id } = useParams();
    console.log(id);
    

    const { data: fotoControl } = useQuery(['GET_FOTOCONTROL_USER', id], () => {
        return driverService.getFotoControlUser(id)
    }, {enabled: !!id })
    
    
>>>>>>> 37966d5 (test)

  const breadCrubmsItems = useMemo(() => {
    return [
      {
        label: "Haydovchi",
        link: "/drivers/main",
      },
      {
        label: "Foto nazorat",
        link: "/drivers/fotocontrolusers",
      },
      {
        label: fotoControl?.data?.full_name || "User",
      },
    ];
  }, [fotoControl]);
  
  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrubmsItems} type="link" />
      </Header>
      <div className="container space-y-5">
        <DriverInfo data={fotoControl?.data} />
        {fotoControl?.data?.status !== "verified" && fotoControl?.data?.status !== 'canceled' && (
          <StickerControl data={fotoControl?.data} />
        )}
        <StickerHistory data={fotoControl?.data} />
      </div>
    </>
  );
};

export default FotoControlUser;
