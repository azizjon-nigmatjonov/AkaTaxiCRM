import SMS from "../SMS";

const RightSide = ({ element = {} }: { element?: any }) => {
  return (
    <div className="w-full flex justify-end">
      <SMS element={element} />
    </div>
  );
};

export default RightSide;
