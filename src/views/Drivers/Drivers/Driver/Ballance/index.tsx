import { useState } from "react";
import { useMutation } from "react-query";
import driverService from "../../../../../services/drivers";
import CCard from "../../../../../components/CElements/CCard";
import {
  BallanceIcon,
  TaxIcon,
  SallaryIcon,
} from "../../../../../components/UI/IconGenerator/Svg";
import CTable from "../../../../../components/CElements/CTable";
import CModal from "../../../../../components/CElements/CModal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../../../store/website";
import { useParams } from "react-router-dom";
import { FetchFunction, HeaderData } from "./Logic";
import { ReFormatMoney } from "../../../../../utils/formatMoney";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./Validation";
import { HFPriceInput } from "../../../../../components/FormElements/HFPriceInput";
import { ListSkeleton } from "../../../../../components/CElements/CSkeleton/ListSkeleton";
import { FilterFunctions } from "../../../../../components/UI/Filter/Logic";
import HFSelect from "../../../../../components/FormElements/HFSelect";
import {
  PaymentDueReasons,
  PaymentDueReasonsOz,
  PaymentDueReasonsRu,
} from "../../../../../constants/payment";

interface Props {
  date: any;
  openBalance: string;
  setOpenBalance: (val: string) => void;
}

const DriverBallance = ({ date, openBalance, setOpenBalance }: Props) => {
  const { headColums } = HeaderData();
  const schema = Validation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { refetch, isLoading, ballanceData, refetchCard } = FetchFunction({
    date,
  });
  const [filterParams, setFilterParams]: any = useState({});
  const { storeFilters } = FilterFunctions({ filterParams, setFilterParams });

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  const { control, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const successSubmit = () => {
    dispatch(
      websiteActions.setAlertData({
        mainTitle: "Amalga oshirildi!",
        title: "To'lov mufaqiyatli amalga oshirildi",
        translation: "common",
      })
    );
    refetch();
    refetchCard();
    reset();

    setOpenBalance("");
  };

  const failSubmited = () => {
    websiteActions.setAlertData({
      mainTitle: "Amalga oshirilmadi",
      title: "To'lov  amalga oshirilmadi",
      translation: "common",
      type: "error",
    });

    setOpenBalance("");
  };

  const { mutate: udateBallance, isLoading: isLoadingForm } = useMutation({
    mutationFn: (balance: any) => {
      return driverService.topUpBallance({ id, balance }).then((data: any) => {
        data?.success ? successSubmit() : failSubmited();
        refetch();
        refetchCard();
        reset();
      });
    },
  });

  const topUpBalance = (data: any) => {
    const params: any = {
      amount: ReFormatMoney(data.amount),
      en: "",
      uz: "",
      ru: "",
      oz: "",
    };

    if (openBalance === "minus") {
      params.amount = "-" + params.amount;
    }

    if (data?.langs) {
      PaymentDueReasons.forEach((el: any) => {
        if ((data.langs = el.value)) {
          params.uz = el.label;
        }
      });
      PaymentDueReasonsOz.forEach((el: any) => {
        if ((data.langs = el.value)) {
          params.oz = el.label;
        }
      });
      PaymentDueReasonsRu.forEach((el: any) => {
        if ((data.langs = el.value)) {
          params.ru = el.label;
        }
      });
    }

    udateBallance(params);
  };

  return (
    <>
      {!isLoading ? (
        <div className="grid grid-cols-3 gap-x-5 mb-5">
          {ballanceData?.generalAmount?.map((val: any) => (
            <CCard
              style={{ minHeight: 0 }}
              classes="flex items-center gap-[18px]"
            >
              <div className="p-[9px] bg-[#DD431F]/10 rounded-lg inline-flex">
                {val.id == "balance" ? (
                  <BallanceIcon />
                ) : val.id == "tax" ? (
                  <TaxIcon />
                ) : (
                  <SallaryIcon />
                )}
              </div>
              <div className="space-y-2">
                <p className="text-[var(--black)] text-[28px] font-semibold">
                  {val.amount} sum
                </p>
                <p className="text-sm text-[var(--gray)] font-normal">
                  {val?.name}
                </p>
              </div>
            </CCard>
          ))}
        </div>
      ) : (
        <div className="mb-5">
          <ListSkeleton count={3} height={110} />
        </div>
      )}

      <CTable
        headColumns={headColums}
        bodyColumns={ballanceData?.data}
        isResizeble={true}
        isLoading={isLoading}
        meta={ballanceData?.meta}
        filterParams={filterParams}
        handleFilterParams={handleFilterParams}
      />

      <CModal
        footerActive={false}
        open={!!openBalance}
        title={
          openBalance === "minus"
            ? "Balansni kamaytirish"
            : "Balansni to’ldirish"
        }
        handleClose={() => setOpenBalance("")}
        minWidth="600px"
      >
        <p className="text-sm font-normal text-[#475467]">
          Admin tomonidan yo’lovchi hisobini{" "}
          {openBalance === "minus" ? "kamaytirish" : "to’ldirish"}
        </p>
        <form onSubmit={handleSubmit(topUpBalance)} className="mt-5 space-y-8">
          <HFPriceInput
            add={openBalance === "minus" ? "-" : ""}
            name="amount"
            label="Summa"
            control={control}
            placeholder={
              openBalance === "minus" ? "-50 000 so'm" : "50 000 so'm"
            }
            type="number"
            required={true}
          />
          {openBalance === "minus" ? (
            <HFSelect
              placeholder="Tanlang"
              name="langs"
              label="Sabab"
              options={PaymentDueReasons}
              control={control}
              clear={true}
            />
          ) : (
            ""
          )}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setOpenBalance("");
                reset();
              }}
            >
              Bekor qilish
            </button>
            <button
              className={`custom-btn ${isLoadingForm && "disabled"}`}
              type="submit"
              disabled={isLoadingForm}
            >
              Tasdiqlash
            </button>
          </div>
        </form>
      </CModal>
    </>
  );
};

export default DriverBallance;
