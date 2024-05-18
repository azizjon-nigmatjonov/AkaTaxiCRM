import usePageRouter from "../../../../../../hooks/useObjectRouter";
import { RxCross2 } from "react-icons/rx";
import HFTextareaAutosize from "../../../../../../components/FormElements/HFTextareaAutosize";
import { useForm } from "react-hook-form";
import driverService from "../../../../../../services/drivers";
import { websiteActions } from "../../../../../../store/website";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Ignored = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { control, getValues } = useForm();

  const ignoreHandler = () => {
    let value = getValues();
    driverService
      .updateCarInfo(id, {
        reason_of_status: value.ignore,
        status: "banned",
      })
      .then(() => {
        navigateQuery({ accept: "" });
        dispatch(
          websiteActions.setAlertData({
            mainTitle: "Yuborildi!",
            title: "Sizning rad etish xabaringiz yuborildi!",
            translation: "common",
          })
        );
        navigateTo('/drivers/main')
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
          onClick={() => navigateQuery({ accept: "" })}
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
       
        <button className="cancel-btn" onClick={() => navigateQuery({ accept: "" })}>Bekor qilish</button>
        <button className="custom-btn" onClick={() => ignoreHandler()}>Yuborish</button>
      
      </div>
    </>
  );
};

export default Ignored;
