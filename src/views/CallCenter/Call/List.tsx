import CSelect from "../../../components/CElements/CSelect";

const options = [
  {
    label: "Bugun",
    value: "today",
  },
];

const cardList = [
  {
    title: "Barchasi",
    amount: "00000",
    color: "main",
  },
  {
    title: "Kiruvchi",
    amount: "00000",
    color: "green",
  },
  {
    title: "Chiquvchi",
    amount: "00000",
    color: "primary",
  },
  {
    title: "O‘tkazib yuborildi",
    amount: "00000",
    color: "gray",
  },
  {
    title: "Javob berilmadi",
    amount: "00000",
    color: "error",
  },
];

export const CallList = () => {
  return (
    <div className="h-full p-[24px] border border-[var(--gray20)] rounded-[12px] bg-white card-shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] font-[600]">Qo’ng’iroq qilish</h2>
        <div className="w-[200px]">
          <CSelect handlerValue={() => {}} options={options} id="filter" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-x-6px mt-24px">
        {cardList.map((item, index) => (
          <div
            key={index}
            className={`rounded-[6px] py-16px px-2px text-center bg-[var(--${item.color}50)]`}
          >
            <h3 className={`font-[600] mb-6px text-[var(--${item.color})]`}>
              {item.title}
            </h3>
            <span>{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
