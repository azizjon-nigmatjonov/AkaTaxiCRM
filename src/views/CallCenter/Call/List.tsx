import { useTranslation } from "react-i18next";

const cardColors: any = {
  inbound: "main",
  outbound: "green",
  local: "primary",
  contacted: "gray",
  not_contacted: "gray",
  not_answered: "gray",
  missed: "error",
};
export const CallList = ({ list }: { list: any }) => {
  const { t } = useTranslation();
  return (
    <div className="h-full p-[16px] border border-[var(--gray20)] rounded-[12px] bg-white card-shadow">
      <div>
        <h2 className="text-[18px] font-[600]">Qo’ng’iroqlar ro'yxati</h2>
      </div>

      <div className="grid grid-cols-7 gap-x-6px mt-24px">
        {Object.entries(list).map(([key, value]: any) => (
          <div
            key={key}
            className={`rounded-[6px] py-8px px-2px text-center flex flex-col justify-between`}
            style={{ backgroundColor: `var(--${cardColors[key]}50)` }}
          >
            <h3
              className={`font-[600] mb-6px text-[var(--${cardColors[key]})] text-[13px]`}
            >
              {t(key)}
            </h3>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
