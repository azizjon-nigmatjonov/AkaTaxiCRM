import CTable from "../../../components/CElements/CTable"
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs"
import { Header } from "../../../components/UI/Header"
import { breadcrumbsItems , headColumns} from './Logic'

const SMSReports = () => {
    return (
        <>
            <Header sticky={true}>
                <CBreadcrumbs items={breadcrumbsItems} progmatic={true} type='link' />
            </Header>
            <div className="px-5">
                <CTable headColumns={headColumns} bodyColumns={[]} handleFilterParams={() => {}} filterParams={{}} />
            </div>
        </>
    )
}

export default SMSReports