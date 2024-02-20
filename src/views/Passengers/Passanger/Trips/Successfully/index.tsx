import EmptyDataComponent from "../../../../../components/EmptyDataComponent";
import Ticket from "../Ticket"

const Success = ({ data }: { data?: any }) => {
  console.log(data.length);

  return (
    <div>
      <Ticket data={data} />
      <EmptyDataComponent isVisible={!data.length} />
    </div>
  )
}

export default Success