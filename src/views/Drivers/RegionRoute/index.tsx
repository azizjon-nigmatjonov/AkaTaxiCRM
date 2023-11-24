import Points from "./Points";
import Result from "./Result";

const RegionRoute = () => {

  const handleChange = (list: any) => {
    console.log(list);
  }

  return (
    <>
      <Points handleChange={handleChange} />

      <Result />
    </>
  );
};

export default RegionRoute;
