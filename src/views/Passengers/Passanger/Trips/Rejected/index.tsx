import Ticket from "../Ticket"

const Rejected = ({ data }: { data?: any }) => {
  return (
    <div>
      <Ticket data={data} />
    </div>
  )
}

export default Rejected