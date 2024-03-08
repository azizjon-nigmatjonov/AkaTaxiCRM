

interface Props {
    label: string,
    border?: string,
    selectHandler?: (val: string) => void,
    value: string
}

const Label = ({ label, border, selectHandler = () => { }, value }: Props) => {

    const labelhandler = (e: string) => {
        switch (e) {
            case 'year':
                return 'Yillik';
            case 'month':
                return 'Oy';
            default:
                return 'Haftalik'
        }
    }

    return (
        <div onClick={() => selectHandler(label)} className={` cursor-pointer py-[10px] px-4 border ${border ? border == 'right' ? 'rounded-r-lg' : 'rounded-l-lg' : 'rounded-none'} ${value == label ? 'bg-[#EAECF0]' : ''}`}>
            <p className="font-semibold text-sm text-[#1D2939] capitalize">{labelhandler(label)}</p>
        </div>
    )
}

export default Label