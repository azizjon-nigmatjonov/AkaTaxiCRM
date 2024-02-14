import LTabs from "../../../../components/CElements/CTab/LineTab"
// import { useGetQueries } from "../../../../hooks/useGetQueries";
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
  // const {tab} = useGetQueries()
  return (
    <div>
      <LTabs tabList={tabList} />

    </div>
  )
}

export default Trips