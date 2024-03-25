import { Header } from "../../components/Header"
import Drivers from "./Drivers"
import Passenger from "./Passenger"

function Dashboard() {
    return (
        <>
            <Header title={'Dashboard'} />
            <div className="flex gap-6 px-6">
                <Passenger />
                <Drivers />
            </div>

        </>
    )
}

export default Dashboard
