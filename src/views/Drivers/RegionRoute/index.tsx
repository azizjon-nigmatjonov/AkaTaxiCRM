import { Header } from "../../../components/UI/Header";
import Points from "./Points";
import Result from "./Result";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { useState } from "react";
// import { useGetQueries } from "../../../hooks/useGetQueries";

const breadCrumbs = [
  { label: "Haydovchi", link: "/drivers/main" },
  { label: "Viloyat qatnovi" },
];

const RegionRoute = () => {
  const [selected, setSelected] = useState<any>([{}, {}]);
  const [active, setActive] = useState(false)
  // const { start, end } = useGetQueries()

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
      </Header>
      <div className="container">
        <Points handleChange={() => setActive(!active)} selected={selected} setSelected={setSelected} />
        <Result selected={selected} />
      </div>
    </>
  );
};

export default RegionRoute