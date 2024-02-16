import { Avatar, AvatarGroup } from '@mui/material';
import usePageRouter from "../../../../hooks/useObjectRouter";

const DriversAvater = ({ data, item, driversHandle = () => { } }: { data?: any, item?:any, driversHandle?: (val:any) => void }) => {
    const { navigateQuery } = usePageRouter()
    
    const driverHandle = (e:any)=>{        
        navigateQuery({ driver_list:  item.id});
        driversHandle(e)
    }

    return (
        <AvatarGroup max={4} sx={{ width: 24, height: 24 }} onClick={()=> driverHandle(data)} >
            {data?.map((val: any) => (
                <Avatar alt={val?.full_name} src={val?.image} sx={{ width: 24, height: 24 }} />
            ))}
        </AvatarGroup>
    )
}

export default DriversAvater