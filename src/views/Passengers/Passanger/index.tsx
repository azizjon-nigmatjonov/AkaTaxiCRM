import { useMemo } from 'react';
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../components/Header"
import { useQuery } from 'react-query';
import { useGetQueries } from '../../../hooks/useGetQueries';
import passengerService from '../../../services/passengers';
import CTabs from '../../../components/CElements/CTab';
import Trips from './Trips'
import PassengerProfile from './PassangerProfile';

const tabList = [
    {
        slug: "",
        name: "Triplar",
    },
    {
        slug: "data",
        name: "Ma'lumotlar",
    },
];

const Passanger = () => {
    const { tab, id } = useGetQueries();

    const { data: passenger } = useQuery(['GET_PASSENGER', id], () => {
        return passengerService.getElement(id)
    });

    const breadCrubmsItems = useMemo(() => {
        return [
            {
                label: "Yo'lovchi",
                link: '/passengers/main'
            },
            {
                label: "Ro'yxat",
                link: "/passengers/main"
            },
            {
                label: passenger?.data?.full_name || 'Yo\'lovchi'
            }

        ]
    }, [passenger]);


    return (
        <>
            <Header>
                <CBreadcrumbs items={breadCrubmsItems} progmatic={true} type="link" />
            </Header>

            <div className='px-6'>
                <CTabs tabList={tabList} />
                {tab === 'data' ? <PassengerProfile /> : <Trips />}
            </div>
        </>
    )
}

export default Passanger