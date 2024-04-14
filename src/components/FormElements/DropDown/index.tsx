import { TextField } from "@mui/material"
import RangeDate from "../../../components/RangeDate";
import CLabel from "../../CElements/CLabel"
import '../style.scss';
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
    label?: string,
    control?: any,
    name: string,
    placeholder?: string
}

const DropDown = ({ label, name, placeholder }: Props) => {
    const clickHandler = (e: any) => {
        console.log('click');
        console.log(e);

    }

    return (
        <div className='HFInput'>
            <CLabel title={label} />
            <div className="relative" >
                <TextField
                    size="small"
                    name={name}
                    placeholder={placeholder}
                    InputProps={{ readOnly: true, endAdornment: <IoMdArrowDropdown size={18} /> }}
                />
                <div className="absolute right-[-380px] bg-yellow-500">
                    <RangeDate handlerValue={clickHandler} />
                    
                </div>
            </div>
        </div>
    )
}

export default DropDown