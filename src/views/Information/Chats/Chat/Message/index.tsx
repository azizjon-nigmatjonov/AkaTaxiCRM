import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

interface Props {
  chat?: any;
}

const MessageUI = ({ chat = [] }: Props) => {
  return (
    <div className="px-5 space-y-3 mt-5">
      {chat?.map((item: any, index: number) => (
        <div key={index}>
          {item.from_passenger ? <LeftSide element={item} /> : <RightSide element={item} />}
        </div>
      ))}
    </div>
  );
};

export default MessageUI;
