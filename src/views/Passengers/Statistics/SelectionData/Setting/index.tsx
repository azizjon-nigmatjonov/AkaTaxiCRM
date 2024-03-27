import Label from "./Label"

const Setting = ({ chooseChange = () => { }, value }: { chooseChange?: (e: string) => void, value: string }) => {

    const selectHandler = (e: string) => {
        chooseChange(e);
    }
    
    return (
        <div className="flex">
            <Label value={value} label='year' border='left' selectHandler={selectHandler} />
            <Label value={value} label='month' selectHandler={selectHandler} />
            <Label value={value} label='week' border='right' selectHandler={selectHandler} />
        </div>
    )
}

export default Setting