import { useForm } from "react-hook-form";
import { Validation } from "../../Form/validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../../hooks/useObjectRouter";
import CModal from "../../../../../components/CElements/CModal";
import ImageUploadBtn from "../../../../../components/Buttons/ImageUpload";
import driverService from "../../../../../services/drivers";
import Classes from "../../Form/Classes";
import { useQuery } from "react-query";
import { websiteActions } from "../../../../../store/website";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
// import CTabs from "../../../../components/CElements/CTab";


interface Props {
    classes: any;
    tab?: any;
    id?: any
    getCarList: (val: any) => void;
    clas?: any
}

const Form = ({id, clas, classes = [], getCarList, tab }: Props) => {

    // console.log(classes);
    console.log(id);
    

    const schema = Validation();
    const dispatch = useDispatch();
    const { navigateQuery, getQueries } = usePageRouter();
    const query = getQueries();

    const { control, setValue, getValues, reset } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
    });

    const { data: car } = useQuery(
        ["GET_CAR", query.id],
        () => {
            return driverService.getElement(query.id);
        },
        {
            enabled: query.id !== "create" && query.id ? true : false,
        }
    );

    const HandleSuccess = (title: string) => {
        dispatch(
            websiteActions.setAlertData({
                title: title,
                translation: "common",
            })
        );
        navigateQuery({ id: "" });
        getCarList(tab);
        reset();
        console.log('dad');
        
    };

    const SubmitForm = async () => {
        
        // console.log(id);
        

        const data: any = getValues();
        const params: any = {};

        // console.log(data.file_id);

        const file_id = data.file_id.toString();

        // console.log(file_id);

        params.car_class_ids = data.ids;
        params.name = data.name_uz;
        params.file_id = +file_id;


        // params.name = {
        //   // uz: data.name_uz || "",
        //   // ru: data.name_ru || "",
        //   en: data.name_en || "",
        // };



        const updatedParams: any = {};

        // console.log(updatedParams.name);


        if (query.id !== "create" && car?.data) {
            if (params.car_class_ids && params.car_class_ids !== car.data.class_ids) {
                updatedParams.car_class_ids = params.car_class_ids;
            }
            if (params.name && params.name !== car.data.car_name) {
                updatedParams.name = params.name;
            }
            if (params.file_id && params.file_id !== car.data.file_id) {
                updatedParams.file_id = params.file_id;
            }
        }


        if (query.id === "create") {
            driverService.createElement(updatedParams).then(() => {
                HandleSuccess("Ma'lumot yaratildi!");
            });
        } else {
            driverService.updateCarInfo(query.id, updatedParams).then(() => {
                HandleSuccess("Ma'lumot yangilandi!");
            });
        }
    };

    const classList = useMemo(() => {
        return classes?.map((i: any) => {
            return {
                ...i,
                checked: car?.data?.class_ids?.includes(+i.slug) || false,
            };
        });
    }, [car, classes]);

    // console.log(car);


    return (
        <CModal
            title={query.id === "create" ? "add_new_mark" : "Tahrirlash"}
            open={!!query?.id}
            handleClose={() => {
                navigateQuery({ id: "" });
                reset();
            }}
            handleSave={() => SubmitForm()}
            textDeleteBtn="cancel"
        >
            {/* <CTabs
        slug="lang"
        tabList={tabList ?? []}
        customStyles={{
          "&": {
            width: "100%",
          },
          "& .MuiButtonBase-root": {
            width: "33%",
          },
        }}
      /> */}

            <div className="grid space-y-3">
                <HFTextField
                    name={`name_${query?.lang || "uz"}`}
                    control={control}
                    placeholder={`Marka nomi`}
                    // label="Marka nomi"
                    // label={undefined}
                    setValue={setValue}
                    required={true}
                    defaultValue={car?.data?.car_name}
                />

                <ImageUploadBtn
                    text="Mashina rasmi"
                    name="file_id"
                    setValue={setValue}
                    defaultValue={car?.data?.first_image}
                />
                <Classes
                    clas={clas}
                    classes={classList}
                    defaultValue={car?.data?.class_ids}
                    setValue={setValue}
                />
            </div>
        </CModal>
    );
};

export default Form;
