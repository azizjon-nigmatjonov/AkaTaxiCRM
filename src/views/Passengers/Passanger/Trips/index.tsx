import {useMemo} from 'react'
import { useQuery } from "react-query";
import LTabs from "../../../../components/CElements/CTab/LineTab"
import { useGetQueries } from "../../../../hooks/useGetQueries";
import Canceled from "./Canceled";
import CurrentlyTrip from "./Currently";
import Rejected from "./Rejected";
import Successfully from "./Successfully";
import passengerService from "../../../../services/passengers";

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
    name: "Haydovchi bekor qilgan",
  },
];

const Trips = () => {
  const { status , id} = useGetQueries()

  const {data:tickets} = useQuery(['GET_TICKETS', id, status], ()=>{
    return passengerService.getTicket({id, status})
  })


  const ticketsData = useMemo(()=>{
    if(!tickets?.data.length) return []
    return tickets?.data    
  }, [tickets])
  
  return (
    <div>
      <LTabs tabList={tabList} />
      {status == 'canceled_by_driver' ? <Rejected data={ticketsData}/> : status == 'done' ? <Successfully data={ticketsData}/> : status == 'canceled_by_client' ? <Canceled data={ticketsData} /> : <CurrentlyTrip data={ticketsData}/>}
    </div>
  )
}

export default Trips