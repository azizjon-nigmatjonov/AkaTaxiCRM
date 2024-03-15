import { Header } from "../../../components/Header";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import Points from "./Points";
import Result from "./Result";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { useMemo } from "react";

const RegionRoute = () => {
  const handleChange = (list: any) => {
    console.log(list);
  };


  const breadCrumbs = useMemo(() => {
    return [
      { label: 'Haydovchi' },
      { label: 'Viloyat qatnovi', link: 'drivers/route' }
    ]
  }, [])

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-5">
        <SectionHeader handleSearch={() => { }}>
          <AddButton text="Marshrut tashkil qilish" onClick={() => { }} />
        </SectionHeader>

        <Points handleChange={handleChange} />
        <Result />
      </div>
    </>
  );
};

export default RegionRoute;
