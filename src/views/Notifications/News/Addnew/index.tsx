import { useMemo } from 'react'
import CBreadcrumbs from '../../../../components/CElements/CBreadcrumbs'
import { Header } from '../../../../components/UI/Header'
// import Setting from '../../Notification/AddNotification/Setting'
// import { useForm } from 'react-hook-form'

const AddNews = () => {

    // const { control, getValues } = useForm()

    const breadCrumbsItems = useMemo(() => {
        return [
            {
                label: 'Xabarnomalar',
                link: '/notifications/news_notification'
            },
            {
                label: 'Yangiliklar',
                link: '/notifications/news_notification'
            },
            {
                label: 'Yangi yangiliklar'
            }
        ]
    }, []);

    // const submitHandler = (e: any) => {
    //     console.log(e);
    //     console.log(getValues);


    // }

    return (
        <>
            <Header sticky={true}>
                <CBreadcrumbs items={breadCrumbsItems} type='link' progmatic={true} />
            </Header>
            <div className='px-6'>
                {/* <Setting control={control} submitHandler={submitHandler} /> */}
            </div>
        </>
    )
}

export default AddNews