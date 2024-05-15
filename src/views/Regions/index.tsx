import CFilterTabs from "../../components/CElements/CFilterTab";
import CBreadcrumbs from "../../components/CElements/CBreadcrumbs"
import { Header } from "../../components/UI/Header"
import { breadCrumbsItems, tabList } from './Logic';
import CCard from "../../components/CElements/CCard";
import Region from "./Region";

const Regions = () => {
    return (
        <>
            <Header sticky={true}>
                <CBreadcrumbs items={breadCrumbsItems} type="link" progmatic={true} />
            </Header>
            <div className="px-5">
                <div className="inline-block">
                    <CFilterTabs tabList={tabList} slug="lan" />
                </div>
                <CCard style={{ minHeight: 0 }}>
                    <Region />
                </CCard>
            </div>
        </>
    )
}

export default Regions