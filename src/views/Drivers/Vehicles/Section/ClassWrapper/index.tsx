import Card from "../Card";

const ClassWrapper = ({
  setInputValue,
  data,
  color,
}: {
  data: any;
  setInputValue: any;
  color: string;
}) => {
  if (!data?.length) {
    return <div className={`p-2 w-full h-full ${color}`}></div>;
  }

  return (
    <div className={`p-2 ${color}`}>
      {data.map((element: any) => (
        <div className="mb-2">
          <Card element={element} setInputValue={setInputValue} />
        </div>
      ))}
    </div>
  );
};

export default ClassWrapper;
