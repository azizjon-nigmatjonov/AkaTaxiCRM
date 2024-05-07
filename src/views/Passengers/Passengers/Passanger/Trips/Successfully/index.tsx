import EmptyDataComponent from "../../../../../../components/UI/EmptyDataComponent";
import Ticket from "../Ticket"

const Success = ({ data }: { data?: any }) => {

  return (
    <div>
      <Ticket data={data} />
      <EmptyDataComponent isVisible={!data.length} />
    </div>
  )
}

export default Success