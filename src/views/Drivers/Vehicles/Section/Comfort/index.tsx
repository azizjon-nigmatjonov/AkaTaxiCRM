// import { useQuery } from "react-query"
// import carService from "../../../../../services/cars"
// import { useMemo } from "react"
import Card from "../Card"

const Comfort = ({ setInputValue, data = [] }: { data: any, setInputValue: any }) => {
    // const { data } = useQuery(['GET_COMFORT'], () => {
    //     return carService.getList(2)
    // })

    // const standart = useMemo(() => {
    //     return data?.data ?? []
    // }, [data])

    return (
        <div className="p-2 bg-[#FFDECC]">
            {data?.map((element: any) => (
                <div className="mb-2">
                    <Card element={element} setInputValue={setInputValue} />
                </div>
            ))}
        </div>
    )

}

export default Comfort