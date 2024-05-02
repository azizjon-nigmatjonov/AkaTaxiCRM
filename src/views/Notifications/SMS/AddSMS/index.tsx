import { useMemo } from "react";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../../components/Header"
import Setting from "../../Setting";
import { useForm } from "react-hook-form";

const AddSMS = () => {

    const { control, getValues } = useForm()

    const breadCrumbItems = useMemo(() => {
        return [
            {
                label: 'Xabarnomalar', link: '/notifications/notification',
            },
            {
                label: 'SMS xabarnoma', link: '/notifications/smsnotification'
            },
            {
                label: 'Yangi xabar'
            }
        ]
    }, [])


    const submitHandler = (e: any) => {
        console.log(e);
        console.log(getValues);


    }



    return (
        <>
            <Header sticky={true}>
                <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
            </Header>

            <div className="px-6">
                <Setting control={control} submitHandler={submitHandler} />
            </div>
        </>
    )
}

export default AddSMS