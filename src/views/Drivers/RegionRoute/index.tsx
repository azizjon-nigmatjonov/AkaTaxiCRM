import Directions from "./Directions";
import SectionHeader from "../../../components/Sections/Header";
import Result from "./Result";

const RegionRoute = () => {
  return (
    <>
      <SectionHeader />

      <div className="grid grid-cols-2 gap-x-3 w-full h-[90vh]">
        <div>
          <Directions />
        </div>
        <div>
          <Result />
        </div>
      </div>
    </>
  );
};

export default RegionRoute;
