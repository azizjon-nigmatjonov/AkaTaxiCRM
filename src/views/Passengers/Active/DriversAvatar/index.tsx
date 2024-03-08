import { Avatar, AvatarGroup } from '@mui/material';
import usePageRouter from "../../../../hooks/useObjectRouter";

const DriversAvater = ({ data, item, driversHandle = () => { } }: { data?: any, item?: any, driversHandle?: (val: any) => void }) => {
    const { navigateQuery } = usePageRouter()

    const driverHandle = () => {
        navigateQuery({ id: item.id });
        driversHandle(item)
    }

    const classes = {
        "& .MuiAvatar-root": {
            'height': '24px',
            'width': '24px',
        }
    }

    return (
        <AvatarGroup max={4}  sx={classes} onClick={driverHandle}>
            {data?.map((val: any) => (
                <Avatar key={val?.id} alt={val?.full_name} src={val?.image}  />
            ))}
        </AvatarGroup>
    )
}

export default DriversAvater