import { useEffect, useMemo, useState } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
// import CTabs from "../../../components/CElements/CTab";
import { useGetQueries } from "../../../hooks/useGetQueries";
import Section from "./Section";
import { useQuery } from "react-query";
import carService from "../../../services/cars";
import { Skeleton } from "@mui/material";
import { Header } from "../../../components/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import SectionHeader from "../../../components/Sections/Header";
import { useParams } from "react-router-dom";




const Vehicles = () => {
  const { navigateQuery } = usePageRouter();
  const { currentTab } = useGetQueries();
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams()

  console.log(id);
  

  const { data: classes, isLoading } = useQuery(["GET_TAB_LIST"], () => {
    return carService.getCarClasses();
  });


  const tab = useMemo(() => {
    return currentTab ? currentTab : "1";
  }, [currentTab]);


  const getCarList = (tab: string) => {
    setCarList([]);
    setLoading(true);
    carService
      .getList(tab)
      .then((res) => {
        setCarList(res?.data);


      })
      .finally(() => setLoading(false));
  };


  const tabList = useMemo(() => {
    if (!classes?.data) return [];
    
    
    const list: any = classes?.data;

    return list.map((item: any) => {
      return {
        slug: item.id + "",
        name: item.name,
      };
    });
  }, [classes]);


  // console.log(classes);


  useEffect(() => {
    if (tab) getCarList(tab);
  }, [tab]);

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Haydovchi" },
      { label: 'Mashinalar', link: '/drivers/cars' }
    ]
  }, [])

  const handleSearch = (value: any) => {
    navigateQuery({ q: value });
  };

  
  return (
    <>
      <Header sticky={true} >
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-6">
        {tabList && !isLoading ? (
          <>
            <div className="flex justify-between">
              {/* <CTabs tabList={tabList ?? []} /> */}
              <SectionHeader handleSearch={handleSearch} />
              <AddButton
                text="new_mark"
                style={{ width: "auto" }}
                onClick={() => navigateQuery({ id: "create" })}
              />
            </div>

            <Section list={carList} loading={loading} />
          </>
        ) : isLoading ? (
          <Skeleton style={{ height: "80px" }} />
        ) : (
          ""
        )}
      
        <Form id={'create'} classes={tabList} tab={tab} getCarList={getCarList} />
      
      </div>
    </>
  );
};

export default Vehicles;
