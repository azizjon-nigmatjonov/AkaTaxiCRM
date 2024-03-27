import { Header } from "../../components/Header"
import Drivers from "./Drivers"
import Passenger from "./Passenger"
import ContentTable from "./Contenttable"



function Dashboard() {
    return (
        <>
            <Header title={'Dashboard'} />
            <div className="flex gap-6 px-6">
                <Passenger />
                <Drivers />

            </div>
            <ContentTable />

        </>
    )
}

export default Dashboard
