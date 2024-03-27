import { useState } from "react"
import Setting from "../../../../views/Passengers/Statistics/SelectionData/Setting"
import usePageRouter from '../../../../hooks/useObjectRouter'
import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";
import Form from "../../../../views/Passengers/Statistics/SelectionData/Form";
const StatisticsHeader = () => {
    const [graph, setGraph] = useState('year');
    const { navigateQuery, getQueries } = usePageRouter();
    const setSearchParams = useSearchParams()[1]
    const navigate = useNavigate();
    const query = getQueries()

    const graphHandler = (e: any) => {
        setGraph(e)
        let date = new Date()
        let year = date.getFullYear();
        let month = date.getMonth();

        switch (e) {
            case 'year':
                return setSearchParams({});
            case 'month':
                if (Object.keys(query).length > 2) {
                    Object.entries(query).map(([keys]) => {
                        if (keys != 'year') {
                            delete query[keys]
                        }
                    })
                }
                navigateQuery({ year: year })
                break
            default:
                let newQuery: any = { year: year, month: month + 1, week: 1 }
                const queryParams = createSearchParams(newQuery);
                return navigate({
                    pathname: location.pathname,
                    search: queryParams.toString(),
                });
        }
    }

    return (
        <div>
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[#FFDECC]" />
                            <p className="text-[var(--black)] text-base font-semibold">Yo’lovchi topganlar</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[var(--main)]" />
                            <p className="text-[var(--black)] text-base font-semibold">Trip amalga oshirganlar</p>
                        </div>
                    </div>
                    <Setting value={graph} chooseChange={graphHandler} />
                </div>
                <Form value={graph} />
            </div>
        </div>
    )
}

export default StatisticsHeader