import Ticket from "../Ticket"

const Success = ({ data }: { data?: any }) => {
  return (
    <div>
      <Ticket data={data} />
    </div>
  )
}

export default Success