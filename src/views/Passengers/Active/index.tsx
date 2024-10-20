import { useEffect, useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
// import SectionHeader from "../../../components/UI/Sections/Header";
import { Header } from "../../../components/UI/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import DriversList from "./DriversList";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import Statistics from "./Statistics";
import { ExtraFunctions, FetchFunction, breadCrubmsItems } from "./Logic";
import { usePlaces } from "../../../hooks/usePlaces";
import BookingDetail from "./BookingDetails";
import { NoteTableButtonActions } from "../../../components/UI/CallModals/NoteModal/Logic";
import { Reasons } from "../../../constants/reason";
import { useDispatch, useSelector } from "react-redux";
import { mqttActions } from "../../../store/mqtt";
import { ListIcon } from "../../../components/UI/IconGenerator/Svg";
import CSelectColor from "../../../components/CElements/CSelectColor";
import { EyeIcon } from "../../../components/UI/IconGenerator/Svg";
import ImageFrame from "../../../components/UI/ImageFrame";
import { FormatTime } from "../../../utils/formatTime";
import DriversAvater from "./DriversAvatar";
import cls from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";
import { FilterComponent } from "./Filter";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";
import { GetCurrentDate } from "../../../utils/getDate";
import FilterButton from "../../../components/UI/Filters";
import CancelIcon from "@mui/icons-material/Cancel";

const ActivePassengers = () => {
  const messageName = useSelector((state: any) => state.mqtt.messageName);
  const { navigateQuery, navigateTo } = usePageRouter();
  const [headColumns, setHeadcolumns] = useState([]);
  const { t } = useTranslation();
  const [filterParams, setFilterParams]: any = useState({});
  const { collectFilter, storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });
  const {
    bodyColumns,
    isLoading,
    refetch,
    driverLists,
    openModal,
    setOpenModal,
    postReason,
    setDriverLists,
  } = FetchFunction();
  const { cancelBooking } = ExtraFunctions({ refetch });

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
    handleFilterParams({ ...filterParams, q: value, page: 1 });
  };

  const handleClick = (obj: { index: number }) => {
    if (obj.index === 0) {
      handleFilterParams({ ...filterParams, status: {}, date: [] });
    } else {
      let date = [
        GetCurrentDate({ type: "today" }),
        GetCurrentDate({ type: "today" }),
      ];
      if (obj.index === 2) {
        date = GetCurrentDate({ type: "week" }).split(",");
      } else if (obj.index === 3) {
        date = GetCurrentDate({ type: "month" }).split(",");
      }

      handleFilterParams({
        ...filterParams,
        status: { value: "done", label: "Yetib bordi" },
        date,
      });
    }
  };

  const {
    data: cardData,
    isLoading: laodingCard,
    refetch: refetchCardData,
  } = useQuery(
    ["GET_ACTIVE_PASSANGER_WIDGET"],
    () => {
      return passengerService.activePassengerWidget();
    },
    {
      refetchInterval: 4 * 60 * 1000,
    }
  );

  const dispatch = useDispatch();
  const driversHandle = (e: any) => {
    setDriverLists(e);
    setOpenModal(true);
  };

  const handleReason = (obj: any) => {
    const params = {
      reason_id: obj.value,
      model_id: obj.model_id,
      model_type: "booking",
    };
    postReason(params);
  };

  useEffect(() => {
    const arr: any = [
      {
        title: "Ism familya",
        id: "info",
        render: (val: any) =>
          val && (
            <div className="flex items-center space-x-2 py-2">
              <ImageFrame image={val.img} gender={val.gender} />
              <span>{val.name}</span>
            </div>
          ),
      },
      {
        title: "Qayerdan",
        id: "from",
        render: (val: any) =>
          val && (
            <p>
              {val.from_region_name}, {val.from_district_name}
            </p>
          ),
      },
      {
        title: "Qayerga",
        id: "to",
        render: (val: any) =>
          val && (
            <p>
              {val.to_region_name}, {val.to_district_name}
            </p>
          ),
      },
      {
        title: "status",
        id: "status",
        render: (val: any) =>
          val && (
            <>
              <p
                className={`px-2 py-1 inline-block rounded-2xl ${
                  val == "created"
                    ? cls.search
                    : val == "driver_accepted"
                    ? cls.found
                    : val == "on-way"
                    ? cls.onWay
                    : val == "done"
                    ? cls.done
                    : val == "canceled"
                    ? cls.notFound
                    : cls.reject
                }`}
              >
                {val == "created"
                  ? "Qidiryapti"
                  : val == "driver_accepted"
                  ? "Topildi"
                  : val == "on-way"
                  ? "Safarda"
                  : val == "done"
                  ? "Yetib bordi"
                  : val == "canceled"
                  ? "Topilmadi"
                  : val == "canceled_by_driver"
                  ? "Haydovchi bekor qildi"
                  : "Yo’lovchi bekor qildi"}
              </p>
            </>
          ),
      },
      {
        title: "Mavjud taksilar",
        id: ["bids_count", "id", "to_region_name", "from_region_name"],
        render: (val: any) => {
          const arr = val[0]
            ?.toString()
            .split("")
            .map((item: string) => {
              return {
                id: item + 1,
                full_name: item + 1,
                image: "",
              };
            });

          return (
            val?.[0] > 0 && (
              <DriversAvater
                data={arr}
                item={{
                  id: val[1],
                  to_region_name: val[2],
                  from_region_name: val[3],
                }}
                driversHandle={driversHandle}
              />
            )
          );
        },
      },
      {
        title: "sabablar",
        id: "ids",
        width: 500,
        render: (ids: any) => {
          return (
            <CSelectColor
              options={Reasons?.map((i: any) => {
                return {
                  ...i,
                  model_id: ids.id,
                };
              })}
              defaultValue={ids.reason_id}
              handleClick={handleReason}
            />
          );
        },
      },
      {
        title: "Narx",
        id: "price",
        width: 180,
        render: (val: any) => val && <p>{val} so'm</p>,
      },
      {
        title: "Klass",
        id: "class",
        render: (val: any) => val && <p>{t(val)}</p>,
      },
      {
        title: "qidiruv vaqti",
        id: "search_time_in_second",
        width: 180,
        render: (val?: any) => {
          if (!val) return 0;
          return <>{FormatTime(val, "secunds")}</>;
        },
      },
      {
        title: "Sana",
        id: "created_at",
        width: 180,
      },
      {
        title: "Qidiruv",
        id: "type",
        render: (val: string) => {
          return <>{t(val)}</>;
        },
      },
      {
        title: "Eslatma",
        id: ["notelist", "user_id"],
        render: (val: any) => {
          if (!val?.[1]) return "";
          return (
            <button
              onClick={() => navigateQuery({ modal: "note", row_id: val[1] })}
            >
              <ListIcon stroke={val[0] ? "black" : "#98A2B3"} />
            </button>
          );
        },
        click: "custom",
      },

      {
        title: "Ko'rish",
        id: "id",
        render: (id: any) =>
          id && (
            <div
              onClick={() => navigateQuery({ booking: id })}
              className="cursor-pointer"
            >
              <EyeIcon fill="var(--gray60)" />
            </div>
          ),
      },
      {
        title: "Bekor qilish",
        id: "id",
        width: 150,
        render: (id: number) => {
          return (
            <button
              onClick={() => cancelBooking(id)}
              className="w-full flex justify-center"
            >
              <CancelIcon style={{ color: "var(--error)" }} />
            </button>
          );
        },
      },
    ];

    setHeadcolumns([]);
    if (!isLoading) {
      setTimeout(() => {
        setHeadcolumns(arr);
      }, 100);
    }
  }, [isLoading]);

  useEffect(() => {
    if (messageName === "new-booking" || messageName === "reason-update") {
      refetch();
      refetchCardData();
      setTimeout(() => {
        dispatch(mqttActions.setData({}));
      }, 0);
    }
  }, [messageName]);

  const { regionList } = usePlaces();

  const Regions = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);

  useEffect(() => {
    Regions.unshift({ value: 0, label: "Barchasi" });
  }, [Regions]);

  return (
    <div>
      <Header>
        <div className="flex justify-between w-full">
          <CBreadcrumbs
            items={breadCrubmsItems}
            type="link"
            progmatic={true}
            handleSearch={handleSearch}
            defaultValue={filterParams?.q}
          />

          <div className="ml-5 flex space-x-5">
            <FilterButton text="filter" />
            <button
              className="custom-btn"
              onClick={() =>
                navigateTo("/passengers/active-passengers/booking")
              }
            >
              Buyurtma berish
            </button>
          </div>
        </div>
      </Header>

      <div className="container">
        <FilterComponent
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />

        <Statistics
          data={cardData}
          handleClick={handleClick}
          isLoading={laodingCard}
        />

        <div className="pb-5">
          <CTable
            headColumns={headColumns}
            bodyColumns={bodyColumns?.list}
            meta={bodyColumns?.meta}
            isResizeble={true}
            isLoading={isLoading}
            filterParams={filterParams}
            handleFilterParams={handleFilterParams}
          />
        </div>
      </div>

      <BookingDetail />
      <DriversList
        data={driverLists}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <NoteTableButtonActions refetchList={refetch} />
    </div>
  );
};

export default ActivePassengers;
