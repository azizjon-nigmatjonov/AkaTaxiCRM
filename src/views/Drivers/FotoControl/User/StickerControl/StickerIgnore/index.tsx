import usePageRouter from "../../../../../../hooks/useObjectRouter";
import { RxCross2 } from "react-icons/rx";
import CancelButton from "../../../../../../components/UI/Buttons/Cancel";
import HFTextareaAutosize from "../../../../../../components/FormElements/HFTextareaAutosize";
import { useForm } from "react-hook-form";
import driverService from "../../../../../../services/drivers";
import { websiteActions } from "../../../../../../store/website";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Ignored = ({ refetch }: { refetch: () => void }) => {
  const { navigateQuery } = usePageRouter();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { control, getValues } = useForm();

  const ignoreHandler = () => {
    let value = getValues();
    driverService
      .updateFotoControl(id, {
        status_reason: value.ignore,
        status: "canceled",
      })
      .then(() => {
        navigateQuery({ action: "" });
        refetch()
        dispatch(
          websiteActions.setAlertData({
            mainTitle: "Yuborildi!",
            title: "Sizning rad etish xabaringiz yuborildi!",
            translation: "common",
          })
        );
      });
  };

  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <span className="text-lg font-semibold ">Rad qilish</span>
          <p className="text-[var(--gray)] text-sm">
            Haydovchini so’rovini rad etish uchun unga sababni bildiring
          </p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => navigateQuery({ action: "" })}
        >
          <RxCross2 />
        </div>
      </div>
      <div className="w-full  my-9">
        <HFTextareaAutosize
          name="ignore"
          control={control}
          placeholder="Sababni yozing"
        />
      </div>
      <div className="flex items-center justify-end gap-3">
        <CancelButton
          text="Orqaga"
          onClick={() => navigateQuery({ action: "" })}
        />
        <button className="custom-btn" onClick={ignoreHandler} >Yuborildi</button>
      </div>
    </>
  );
};

export default Ignored;
