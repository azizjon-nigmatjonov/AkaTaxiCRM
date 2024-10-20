import { usePermissions } from "../../../../../hooks/usePermissions";
import { CPeriodPicker } from "../../../../../components/CElements/CPeriodPicker";

interface Props {
  setDate: (val: any) => void;
  setOpenBalance: (val: string) => void;
}
export const PostBallance = ({ setDate, setOpenBalance }: Props) => {
  const { checkPermission } = usePermissions();

  const BalanceFeatures: Function = () => {
    return (
      <div className="grid grid-cols-2 gap-x-5 w-[660px] mt-1">
        <div>
          <CPeriodPicker
            placeholder="Vaqtni tanlang"
            handleValue={(obj: any) => setDate(obj)}
          />
        </div>

        <div className="flex space-x-5">
          {checkPermission("payment") && (
            <button
              className="custom-btn error"
              onClick={() => setOpenBalance("minus")}
            >
              Balansni ayirish
            </button>
          )}

          {checkPermission("payment") && (
            <button
              className="custom-btn success"
              onClick={() => setOpenBalance("add")}
            >
              Balansni to’ldirish
            </button>
          )}
        </div>
      </div>
    );
  };

  return { BalanceFeatures };
};
