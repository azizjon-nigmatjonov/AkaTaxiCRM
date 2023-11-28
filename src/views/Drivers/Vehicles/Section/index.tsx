import Card from "./Card";

interface Props {
  list: any;
  isLoading?: boolean;
}

const Section = ({ list = [] }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-[18px]">
      {list.map((element: any, index: number) => (
        <div key={index}>
          <Card element={element} />
        </div>
      ))}
    </div>
  );
};

export default Section;
