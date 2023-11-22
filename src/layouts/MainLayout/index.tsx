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
  const dispatch = useDispatch()
  const GetRegions = () => {
    regionService.getList().then((regions) => {
      regionService.getDistrict().then((discricts) => {        
        const arr: any = regions?.data ?? []
        const arr2 = discricts?.data ?? []
        for (let i = 0; i < arr.length; i++) {
          arr[i].discricts = [] 
          console.log('111',  arr[i].discricts);
          
          // for (let j = 0; j < arr2.length; j++) {
          //   if (arr[i].id === arr2[j].region_id) {
          //     arr[i].discricts.push(arr2[j])
          //   }
          // }
          
        }
        console.log('arr', arr);
        
      })
      dispatch(regionActions.setRegions(regions?.data ?? []))
    });
  }

  useEffect(() => {
    GetRegions()
  }, [])

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
