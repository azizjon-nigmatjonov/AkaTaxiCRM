import Ticket from '../Ticket'
import EmptyDataComponent from '../../../../../components/EmptyDataComponent'

const AllTrips = ({ data }: { data: any }) => {
    return (
        <div>
            <Ticket data={data} />
            <EmptyDataComponent isVisible={!data.length} />
        </div>
    )
}

export default AllTrips