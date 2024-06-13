import { Avatar } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
  others?: boolean;
  bookingData: any;
}

const UserInfo = ({ bookingData }: Props) => {
  return (
    <div className="grid grid-cols-3 py-[10px] border-b border-[var(--border)]">
      <div className="flex items-center gap-x-3">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ height: 40, width: 40 }}
        />
        <div>
          <p className="text-sm text-[var(--gray90)] font-medium">
            {bookingData.passenger_name}
          </p>
          <span className=" text-sm text-[var(--gray60)] font-normal">
            {bookingData.passenger_phone}
          </span>
        </div>
      </div>
      {bookingData.for_other && (
        <div className="flex justify-center">
          <button className="bg-[var(--yellow90)] text-[var(--gray90)] font-medium py-2 px-3 rounded-full flex items-center gap-2">
            <span> Boshqa yo’lovchi</span>
            <NavigateNextIcon />
          </button>
        </div>
      )}
      {bookingData.for_other && (
        <div className="flex items-center justify-end gap-x-10">
          <div>
            <p className="text-sm text-[var(--gray90)] font-medium">{bookingData.other_passenger_name}</p>
            <span className=" text-sm text-[var(--gray60)] font-normal">
              {bookingData.other_passenger_phone}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
