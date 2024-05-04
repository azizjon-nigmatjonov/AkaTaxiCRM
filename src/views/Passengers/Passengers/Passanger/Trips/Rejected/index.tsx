import EmptyDataComponent from "../../../../../../components/UI/EmptyDataComponent"
import Ticket from "../Ticket"

const Rejected = ({ data }: { data?: any }) => {
  return (
    <div>
      <Ticket data={data} />
      <EmptyDataComponent isVisible={!data.length} />
    </div>
  )
}

export default Rejected