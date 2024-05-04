import { useEffect, useMemo, useState } from "react";
import AddButton from "../../../components/UI/Buttons/AddButton";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import { useGetQueries } from "../../../hooks/useGetQueries";
import Section from "./Section";
import { useQuery } from "react-query";
import carService from "../../../services/cars";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import SectionHeader from "../../../components/UI/Sections/Header";

const Vehicles = () => {
  const { navigateQuery, getQueries } = usePageRouter();
  const { currentTab } = useGetQueries();
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("mashina nomi");
  const query = getQueries();

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
    const list: any = classes.data;

    return list.map((item: any) => {
      return {
        slug: item.id + "",
        name: item.name,
      };
    });
  }, [classes]);

  useEffect(() => {
    if (tab) getCarList(tab);
  }, [tab]);

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Haydovchi", link: "/drivers/main" },
      { label: "Mashinalar" },
    ];
  }, []);

  const handleSearch = (value: any) => {
    navigateQuery({ q: value });
  };
  console.log("tabList", tabList);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
      </Header>

      <div className="px-5">
        <div className="flex justify-between">
          <SectionHeader handleSearch={handleSearch} />
          <AddButton
            text="new_mark"
            style={{ width: "auto" }}
            onClick={() => {
              setInputValue("Marka nomi");
              navigateQuery({ id: "create" });
            }}
          />
        </div>

        {!isLoading ? (
          <Section
            setInputValue={setInputValue}
            list={carList}
            loading={loading}
          />
        ) : (
          ""
        )}

        {query?.id && (
          <Form
            inputValue={inputValue}
            id={query.id}
            classes={tabList}
            tab={tab}
            getCarList={getCarList}
          />
        )}
      </div>
    </>
  );
};

export default Vehicles;
