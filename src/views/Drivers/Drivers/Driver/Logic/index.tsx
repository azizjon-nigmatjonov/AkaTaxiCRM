import usePageRouter from "../../../../../hooks/useObjectRouter";
import { usePermissions } from "../../../../../hooks/usePermissions";
import { CPeriodPicker } from "../../../../../components/CElements/CPeriodPicker";

interface Props {
  setDate: (val: any) => void;
}
export const PostBallance = ({ setDate }: Props) => {
  const { navigateQuery } = usePageRouter();
  const { checkPermission } = usePermissions();

  const BalanceFeatures: Function = () => {
    return (
      <div className="grid grid-cols-2 gap-x-5 ">
        <div>
          <CPeriodPicker
            placeholder="Vaqtni tanlang"
            handleValue={(obj: any) => setDate(obj)}
          />
        </div>

        {checkPermission("payment") && (
          <button
            className="custom-btn success"
            onClick={() => navigateQuery({ amount: true })}
          >
            Balansni to’ldirish
          </button>
        )}
      </div>
    );
  };

  return { BalanceFeatures };
};
