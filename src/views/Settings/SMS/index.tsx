import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import SMSMessage from "./Message";
import TypeCard from "./SMSType";

const ListSms = [
  {
    label: "SMS xabar",
    value: "sms",
  },
  {
    label: "Push xabar",
    value: "push",
  },
];

const ListPerson = [
  {
    label: "Barchasi",
    value: "all",
  },
  {
    label: "Haydovchi",
    value: "drivers",
  },
  {
    label: "Yo‘lovchi",
    value: "passenger",
  },
];

const SMS = () => {
  return (
    <>
      <SectionHeader title="SMS xabarnoma" />

      <div className="space-y-[18px]">
        <TypeCard List={ListSms} title="Xabar turi" />
        <TypeCard List={ListPerson} title="Kimga yuborish kerak?" />
        <SMSMessage title="Xabar matni" />
      </div>

      <div className="flex justify-end mt-6">
        <div className="inline-block">
          <AddButton iconLeft={false} text="Xabarni yuborish" />
        </div>
      </div>
    </>
  );
};
export default SMS;
