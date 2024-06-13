import { useMemo, useState } from 'react'
import { useQuery } from "react-query";
import LTabs from "../../../../../components/CElements/CTab/LineTab"
import { useGetQueries } from "../../../../../hooks/useGetQueries";
// import Canceled from "./Canceled";
// import CurrentlyTrip from "./Currently";
// import Rejected from "./Rejected";
// import Successfully from "./Successfully";
import passengerService from "../../../../../services/passengers";
import { Skeleton } from '@mui/material';
import AllTrips from './Alltrips';
import { useParams } from 'react-router-dom';

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
  const { status } = useGetQueries()
  const { id } = useParams()
  const [page, setPage] = useState(1);

  const { data, isLoading: loading } = useQuery(['GET_TICKETS', id, status, page], () => {
    return passengerService.getTicket({ id, status, page, perPage: 10 })
  })


  const ticketsData: any = useMemo(() => {
    if (!data?.data.length) return {
      data: [],
      pageCount: 1
    }
    const tickets: any = data
    return {
      data: tickets?.data,
      pageCount: tickets.meta.pageCount,
    }
  }, [data]);



  return (
    <>
      <div className='top-[160px] z-10 bg-[var(--softGray)]'> <LTabs tabList={tabList} /></div>
      {
        loading ? Array.from(new Array(2)).map(() => <Skeleton variant="rounded" width={'70%'} height={150} style={{ marginBottom: 20 }} />) : <div>
          <div className='h-[580px] sticky bottom-0  overflow-y-scroll'>
            <AllTrips page={page} setPage={setPage} pageCount={ticketsData.pageCount} data={ticketsData?.data} />
          </div>

        </div>
      }
    </>
  )
}

export default Trips