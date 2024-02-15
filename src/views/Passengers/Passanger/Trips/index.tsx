import LTabs from "../../../../components/CElements/CTab/LineTab"
import { useGetQueries } from "../../../../hooks/useGetQueries";
import Canceled from "./Canceled";
import CurrentlyTrip from "./Currently";
import Rejected from "./Rejected";
import Successfully from "./Successfully";

const tabList = [
  {
    slug: "",
    name: "Aktiv",
  },
  {
    slug: "success_trip",
    name: "Yakunlangan",
  },
  {
    slug: "reject_trip",
    name: "Bekor qilingan",
  },
  {
    slug: "driver_reject",
    name: "Haydovchi bekor qilgan",
  },
];
const Trips = () => {
  const { trips } = useGetQueries()

  return (
    <div>
      <LTabs tabList={tabList} />
      {trips == 'driver_reject' ? <Rejected /> : trips == 'success_trip' ? <Successfully /> : trips == 'reject_trip' ? <Canceled /> : <CurrentlyTrip />}
    </div>
  )
}

export default Trips