import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import Points from "./Points";
import Result from "./Result";

const RegionRoute = () => {
  const handleChange = (list: any) => {
    console.log(list);
  };

  return (
    <>
      <SectionHeader handleSearch={() => {}}>
        <AddButton text="Marshrut tashkil qilish" onClick={() => {}} />
      </SectionHeader>
      <Points handleChange={handleChange} />

      <Result />
    </>
  );
};

export default RegionRoute;
