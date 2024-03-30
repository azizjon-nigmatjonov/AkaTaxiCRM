import Ticket from '../Ticket'
import EmptyDataComponent from '../../../../../components/EmptyDataComponent'
import AddButton from '../../../../../components/Buttons/AddButton'

interface Props {
    data: any,
    pageCount?: any,
    page?: number,
    setPage?: any,
}

const AllTrips = ({ data, pageCount, setPage, page }: Props) => {

  
    // console.log(data);

    return (
        <div>
            <Ticket data={data} />
            <EmptyDataComponent isVisible={!data.length} />
            {page != pageCount && <div className='flex mt-5 justify-center'><div className='flex gap-3'>
                <AddButton iconLeft={false} onClick={() => setPage((prev: any) => pageCount >= prev && prev + 1)} text='Prev' />
                <AddButton iconLeft={false} onClick={() => setPage((prev: any) => pageCount >= prev && prev + 1)} text='Next' />
            </div> </div>}
        </div>
    )
}

export default AllTrips