import Ticket from '../Ticket'

const CurrentlyTrip = ({ data }: { data: any }) => {
    return (
        <div>
            <Ticket data={data} />
        </div>
    )
}

export default CurrentlyTrip