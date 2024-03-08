import { useMemo } from "react"
import { useQuery } from "react-query"
import PStaticsHeader from "./Header"
import RegionsPie from "./Regions"
import CCard from "../../../../components/CElements/CCard"
import statistics from "../../../../services/statistics"

const StatisticsGender = () => {
    const { data, isLoading } = useQuery(['GET_PASSANGER_REGIONS'], () => {
        return statistics.getPassengerGenderRegions()
    })


    const RegionStatics = useMemo(() => {
        if (!data) return
        let statics = data?.data;
        return statics.map((val: any) => {
            return {
                ...val,
                all: val.male_users + val.female_users,
                data: [
                    { value: val.male_users, label: String(val.male_users) },
                    { value: val.female_users, label: String(val.female_users) },
                ]
            }
        })
    }, [data])


    return (
        <div className="px-6">
            <CCard style={{ minHeight: 0 }}>
                <PStaticsHeader loading={isLoading} data={RegionStatics} />
                <RegionsPie loading={isLoading} data={RegionStatics} />
            </CCard>
        </div>
    )
}

export default StatisticsGender