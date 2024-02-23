import EmptyDataComponent from "../../../../../components/EmptyDataComponent"
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