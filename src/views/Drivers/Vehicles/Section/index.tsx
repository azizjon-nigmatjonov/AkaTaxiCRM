import Card from "./Card";
import NullData from "../../../../components/NullData";

interface Props {
  list: any;
  isLoading?: boolean;
  loading: boolean
}

const Section = ({ list = [], loading = true }: Props) => {


  return (
    <>
      {list?.length && !loading ? (
        <div className="grid grid-cols-3 gap-[18px]">
          {list.map((element: any) => (
            <div key={element.id}>
              <Card element={element} />
            </div>
          ))}
        </div>
      ) : (
        loading ? "Yuklanmoqda..." : <NullData />
      )}
    </>
  );
};

export default Section;
