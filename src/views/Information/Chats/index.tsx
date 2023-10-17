import SectionHeader from "../../../components/Sections/Header";
import ChatSinglePage from "./Chat";
import ChatList from "./List";

const Chats = () => {
  return (
    <div className="flex justify-between space-x-6">
      <div className="w-[500px]">
        <SectionHeader title="Chatlar" />
        <ChatList />
      </div>
      <div className="w-full">
        <ChatSinglePage />
      </div>
    </div>
  );
};

export default Chats;
