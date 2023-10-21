import SMS from "../SMS";

interface Prosp {
  element?: any
}

const LeftSide = ({ element = {} }: Prosp) => {
  return (
    <div className="w-full">
      <SMS element={element} left={true} />
    </div>
  );
};

export default LeftSide;
