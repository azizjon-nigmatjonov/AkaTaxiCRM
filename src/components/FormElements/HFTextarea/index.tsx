import { Controller } from "react-hook-form";
import { CgFormatBold } from "react-icons/cg";
import { GoItalic } from "react-icons/go";
import { FiUnderline } from "react-icons/fi";
import { ImageFrameIcon } from "../../../components/UI/IconGenerator/Svg";
import { TextareaAutosize } from "@mui/material";

interface Props {
    control?: any;
    name: string;
    defaultValue?: any;
    rules?: any;
    type?: string;
    activePassword?: boolean;
    placeholder?: string;
}

const HFTextarea = ({ control, name, defaultValue, rules, type = 'text', activePassword = false, ...props }: Props) => {

    return (
        <div className=" border border-[var(--lineGray)] rounded-xl ">
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={{ ...rules }}
                render={({ field: { onChange, value } }) => (
                    <div>
                        <div className="flex items-center gap-6 border-b border-[var(--lineGray)] py-4 px-5">
                            <CgFormatBold size={16} />
                            <GoItalic size={16} />
                            <FiUnderline size={16} />
                            <ImageFrameIcon />
                        </div>
                        <div className="HFTextarea p-6 h-[154px]">
                            <TextareaAutosize
                                // size="small"
                                value={value}
                                onChange={(e) => onChange(e.target.value)}
                                name={name}
                                {...props}
                            />
                        </div>
                    </div>
                )}
            />
        </div>
    )
}

export default HFTextarea