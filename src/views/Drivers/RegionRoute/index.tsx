import { Header } from "../../../components/UI/Header";
import Points from "./Points";
import Result from "./Result";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";

const breadCrumbs = [
  { label: "Haydovchi", link: "/drivers/main" },
  { label: "Viloyat qatnovi" },
];

export const RegionRoute = () => {
  const handleChange = (list: any) => {
    console.log(list);
  };

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
      </Header>
      <div className="container">
        {/* <SectionHeader handleSearch={() => { }}>
        <AddButton text="Marshrut tashkil qilish" onClick={() => { }} />
      </SectionHeader>  */}
        <Points handleChange={handleChange} />
        <Result />
      </div>
    </>
  );
};
