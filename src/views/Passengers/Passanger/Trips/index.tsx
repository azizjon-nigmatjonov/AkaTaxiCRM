import { useMemo } from 'react'
import { useQuery } from "react-query";
import LTabs from "../../../../components/CElements/CTab/LineTab"
import { useGetQueries } from "../../../../hooks/useGetQueries";
// import Canceled from "./Canceled";
// import CurrentlyTrip from "./Currently";
// import Rejected from "./Rejected";
// import Successfully from "./Successfully";
import passengerService from "../../../../services/passengers";
import { Skeleton } from '@mui/material';
import AllTrips from './Alltrips';

const tabList = [
  {
    slug: '',
    name: 'Barchasi'
  },
  {
    slug: "created",
    name: "Aktiv",
  },
  {
    slug: "done",
    name: "Yakunlangan",
  },
  {
    slug: "canceled_by_client",
    name: "Bekor qilingan",
  },
  {
    slug: "canceled_by_driver",
    name: "Haydovchi bekor qilgan ",
  },
];

const Trips = () => {
  const { status, id } = useGetQueries()

  const { data: tickets, isLoading: loading } = useQuery(['GET_TICKETS', id, status], () => {
    return passengerService.getTicket({ id, status })
  })


  const ticketsData = useMemo(() => {
    if (!tickets?.data.length) return []
    return tickets?.data
  }, [tickets])

  return (
    <>
      <div className='sticky top-[160px] z-10 bg-[var(--softGray)]'> <LTabs tabList={tabList} /></div>
      {
        loading ? Array.from(new Array(2)).map(() => <Skeleton variant="rounded" width={'70%'} height={150} style={{ marginBottom: 20 }} />) : <div>
          <div className='h-[580px] sticky bottom-0  overflow-y-scroll'>
            <AllTrips data={ticketsData} />
            {/* {status == 'canceled_by_driver' ? <Rejected data={ticketsData} /> : status == 'done' ? <Successfully data={ticketsData} /> : status == 'canceled_by_client' ? <Canceled data={ticketsData} /> : <CurrentlyTrip data={ticketsData} /> : <AllTrips data={ticketsData} />} */}
          </div>
        </div>
      }
    </>
  )
}

export default Trips