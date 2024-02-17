import Ticket from "../Ticket"

const Canceled = ({ data }: { data?: any }) => {
  return (
    <div>
      <Ticket data={data} />
    </div>
  )
}

export default Canceled