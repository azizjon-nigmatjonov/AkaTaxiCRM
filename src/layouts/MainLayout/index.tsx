import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import cls from "./style.module.scss";
import { useEffect } from "react";
import { ColorConstants } from "../../constants/website";
import regionService from "../../services/regions";
import { regionActions } from "../../store/regions/index";
import { useDispatch } from "react-redux";

const MainLayout = () => {
  const dispatch = useDispatch();

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

  const GetDisctricts = (array: any) => {
    if (!array) return;
    const arr = array
    regionService.getDistrict().then((response) => {
      const list = response?.data ?? [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < list.length; j++) {   
          list[j].checked = false         
          if (list[j].region_id == arr[i].id) {
            arr[i].list.push(list[j])
          }
        }
      }

      dispatch(regionActions.setRegions(arr ?? []));
    });
  };

  useEffect(() => {
    GetRegions();
  }, []);

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
        <Header />
        <div className="p-6">
          <Outlet />
        </div>
        {/* <MainSkeleton /> */}
      </div>
    </div>
  );
};

export default MainLayout;
