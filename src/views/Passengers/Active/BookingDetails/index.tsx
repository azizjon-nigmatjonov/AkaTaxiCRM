import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import TripInfo from "./TripInfo";
import UserInfo from "./Usersinfos";
import { FetchFunction } from "./Logic";
import { OneSkeleton } from "../../../../components/CElements/CSkeleton/OneSkeleton";

const BookingDetail = () => {
  const { getQueries, navigateQuery } = usePageRouter();
  const query = getQueries();
  const { bookingData, isLoading } = FetchFunction();
    
  return (
    <CModal
      open={!!query?.booking}
      handleClose={() => navigateQuery({ booking: "" })}
      footerActive={false}
      title="Avtiv yo’lovchi"
      minWidth={700}
      titleCenter={false}
    >
        {isLoading ? <OneSkeleton height={280} /> : ''}
      {bookingData?.id ? (
        <div className="space-y-[32px]">
          <UserInfo bookingData={bookingData} />
          <TripInfo bookingData={bookingData} />
        </div>
      ) : (
        ""
      )}
    </CModal>
  );
};

export default BookingDetail;
