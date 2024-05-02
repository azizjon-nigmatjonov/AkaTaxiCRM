


interface Props {
    label: any,
    handleChange?: (e: string) => void,
    value?: any
}

const CRadio = ({ label, value, handleChange = () => { } }: Props) => {

    return (
        <>
            <div onClick={() => handleChange(label)} className="px-[18px] py-[14px] rounded-xl border border-[#F1F1F5] bg-white w-full flex items-center justify-between cursor-pointer">
                <span className="text-black text-sm font-normal">{label}</span>
                <div className={`h-[18px] w-[18px] rounded-full ${value == label ? 'border-4 border-[#DD431F]' : 'border-2 border-[#F1F1F5]'}`} />
            </div>


        </>
    )
}

export default CRadio