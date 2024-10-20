import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Header } from "../../../../components/UI/Header";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import driverService from "../../../../services/drivers";
import DriverInfo from "./Info";
import StickerControl from "./StickerControl";
import StickerHistory from "./StickerHistory";
import { useParams } from "react-router-dom";
import { OneSkeleton } from "../../../../components/CElements/CSkeleton/OneSkeleton";

const FotoControlUser = () => {
  const { id } = useParams();
  const [filterParams, setFilterParams]: any = useState({});

  const {
    data: fotoControl,
    refetch,
    isLoading,
  } = useQuery(
    ["GET_FOTOCONTROL_USER", id],
    () => {
      return driverService.getFotoControlUser(id);
    },
    { enabled: !!id }
  );

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
        {isLoading ? (
          <OneSkeleton height={1000} />
        ) : (
          <>
            <DriverInfo data={fotoControl?.data} />
            {fotoControl?.data?.status !== "verified" &&
              fotoControl?.data?.status !== "canceled" && (
                <StickerControl data={fotoControl?.data} refetch={refetch} />
              )}
            <StickerHistory
              data={fotoControl?.data}
              filterParams={filterParams}
              setFilterParams={setFilterParams}
            />
          </>
        )}
      </div>
    </>
  );
};

export default FotoControlUser;
