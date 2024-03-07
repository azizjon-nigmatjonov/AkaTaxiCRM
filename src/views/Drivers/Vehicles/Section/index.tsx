import Card from "./Card";
import NullData from "../../../../components/NullData";
import Header from "./Header";

interface Props {
  list: any;
  isLoading?: boolean;
  loading: boolean
}

const Section = ({ list = [], loading = true }: Props) => {

  return (
    <>
      <div className="bg-white p-2 border border-[var(--lightGray)] rounded-xl">
      <Header />
        {list?.length && !loading ? (
          <div className="grid grid-cols-3 gap-[18px] mt-2">
            {list.map((element: any) => (
              <div key={element.id}>
                <Card element={element} />
              </div>
            ))}
          </div>
        ) : (
          loading ? "Yuklanmoqda..." : <NullData />
        )}
      </div>
    </>
  );
};

export default Section;
