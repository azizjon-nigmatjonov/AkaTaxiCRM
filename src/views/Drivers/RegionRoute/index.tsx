import Points from "./Points";
import Result from "./Result";

const RegionRoute = () => {

  const hanldeSelect = (list: any) => {
    console.log(list);
    
  }

  return (
    <>
      <Points hanldeSelect={hanldeSelect} />

      <Result />
    </>
  );
};

export default RegionRoute;
