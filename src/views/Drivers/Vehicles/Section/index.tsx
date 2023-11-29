import Card from "./Card";

interface Props {
  list: any;
  isLoading?: boolean;
}

const Section = ({ list = [] }: Props) => {
  return (
    <>
      {list?.length ? (
        <div className="grid grid-cols-3 gap-[18px]">
          {list.map((element: any, index: number) => (
            <div key={index}>
              <Card element={element} />
            </div>
          ))}
        </div>
      ) : (
        <img className="w-[150px] mx-auto mt-10" src="../../../../../public/images/no-data.png" alt="no data" />
      )}
    </>
  );
};

export default Section;
