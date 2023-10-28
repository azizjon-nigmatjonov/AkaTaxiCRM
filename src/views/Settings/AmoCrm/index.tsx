import AddButton from "../../../components/Buttons/AddButton";
import CCard from "../../../components/CElements/CCard";

const AmoCrm = () => {
  const redirect = () => {
    window.open(
      "https://www.amocrm.ru/oauth?client_id=53ea15d0-64d4-4928-a6d7-3dfb024514ec&state=XXX&mode=post_message",
      "Предоставить доступ",
      "scrollbars, status, resizable, width=750, height=580"
    );
  };

  return (
    <CCard style={{ minHeight: "auto" }}>
      <div className="w-[300px]">
        <AddButton iconLeft={""} text="Login" onClick={() => redirect()} />
      </div>
    </CCard>
  );
};

export default AmoCrm;
