import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
// import { Header } from "../../components/Header";
import cls from "./style.module.scss";
import { useEffect } from "react";
import { ColorConstants } from "../../constants/website";
import regionService from "../../services/regions";
import { regionActions } from "../../store/regions/index";
import { useDispatch, useSelector } from "react-redux";
import CAlert from "../../components/CElements/CAlert";

const MainLayout = () => {
  const dispatch = useDispatch();
  const regions = useSelector((state: any) => state.regions.regions);
  const alertData = useSelector((state: any) => state.website.alert);

  const GetVillage = (val: any) => {
    if (!val) return []
    const arr = val
    regionService.getVillage().then(response => {
      const villages = response.data ?? []
      for (let l = 0; l < arr.length; l++) {
        for (let i = 0; i < arr?.[l].list.length; i++) {
          for (let j = 0; j < villages.length; j++) {
            if (villages[j].district_id == arr?.[l].list[i].id) {
              arr?.[l].list[i].village.push(villages[j])
            }
          }
        }
      }
      dispatch(regionActions.setRegions(arr ?? []));
    })
  }

  const GetDisctricts = (array: any,) => {
    if (!array) return;
    const arr = array;

    regionService.getDistrict().then((response) => {
      const list = response?.data ?? [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < list.length; j++) {
          list[j].checked = false;
          list[j].village = [];
          if (list[j].region_id == arr[i].id) {
            arr[i].list.push(list[j]);
          }
        }
      }
      GetVillage(arr)
      // dispatch(regionActions.setRegions(arr ?? []));

    });
  };

  const GetRegions = () => {
    regionService.getList().then((regions) => {
      GetDisctricts(
        regions?.data?.map((el: any) => {
          return {
            ...el,
            list: [],
          };
        }) ?? []
      );
    });
  };

  useEffect(() => {
    if (!regions?.length) GetRegions();
  }, [regions]);

  useEffect(() => {
    (Object.keys(ColorConstants) as (keyof typeof ColorConstants)[]).forEach(
      (key) => {
        document.documentElement.style.setProperty(
          "--" + key,
          ColorConstants[key]
        );
      }
    );
  }, []);

  return (
    <div className={cls.layout}>
      <Sidebar />
      <div className={cls.content}>
        {/* <Header /> */}

        <Outlet />

        {/* <MainSkeleton /> */}
      </div>

      {alertData?.title && <CAlert data={alertData} />}
    </div>
  );
};

export default MainLayout;
