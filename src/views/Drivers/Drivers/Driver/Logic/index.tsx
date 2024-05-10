import usePageRouter from "../../../../../hooks/useObjectRouter";
import AddButton from "../../../../../components/UI/Buttons/AddButton";
import DropDown from "../../../../../components/FormElements/DropDown";

export const PostBallance = () => {
    const { navigateQuery } = usePageRouter()

    const BalanceFeatures: Function = () => {
        return <div className="flex items-center gap-4 ">
            <DropDown name="Vaqt" placeholder="Tanlang"  defaultValue={'01.01-.01.01'} position="240"/>
            <AddButton id="successBtn" text="Balansni to’ldirish" onClick={() => navigateQuery({ amount: true })} />
        </div>

    }

    return { BalanceFeatures }
}