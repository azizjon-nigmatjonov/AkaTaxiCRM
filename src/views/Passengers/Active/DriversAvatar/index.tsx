import { Avatar, AvatarGroup } from '@mui/material';
import usePageRouter from "../../../../hooks/useObjectRouter";

const DriversAvater = ({ data, item, driversHandle = () => { } }: { data?: any, item?: any, driversHandle?: (val: any) => void }) => {
    const { navigateQuery } = usePageRouter()

    const driverHandle = (e: any) => {
        navigateQuery({ driver_list: item.id });
        driversHandle(e)
    }

    // const num = [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]


    return (
        <AvatarGroup max={4} onClick={() => driverHandle(data)} >
            {data?.map((val: any, index:number) => (
                <Avatar alt={val?.full_name} src={val?.image} style={{
                    width: index === data.length - 1 ? '24px' : '24px',
                    height: index === data.length - 1 ? '24px' : '24px',
                }} />
            ))}
            {/* {num?.map((val: any, index: number) => (
                <Avatar alt={'sad'} src={'das'} sx={{ width: 24, height: 24 }} style={{
                    width: index === num.length - 1 ? '24px' : '24px',
                    height: index === num.length - 1 ? '24px' : '24px',
                }} />
            ))} */}
        </AvatarGroup>
    )
}

export default DriversAvater