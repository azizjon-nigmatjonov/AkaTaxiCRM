import usePageRouter from "../../../../../hooks/useObjectRouter";
// import AddButton from "../../../../../components/UI/Buttons/AddButton";
import DropDown from "../../../../../components/FormElements/DropDown";

export const PostBallance = () => {
    const { navigateQuery } = usePageRouter()

    const BalanceFeatures: Function = () => {
        return <div className="flex gap-4 ">

            <div>
                <DropDown name="Vaqt" placeholder="Tanlang" defaultValue={'01.01-.01.01'} position="240" />
            </div>

            <button className="custom-btn success" onClick={() => navigateQuery({ amount: true })}>
                Balansni to’ldirish
            </button>
        </div>

    }

    return { BalanceFeatures }
}