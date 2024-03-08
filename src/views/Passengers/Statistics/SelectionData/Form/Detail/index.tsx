import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CLabel from "../../../../../../components/CElements/CLabel";

interface Props {
    id?: string;
    options: any;
    label?: string;
    handlerValue?: (val: any) => void
    // classes?: string;
    disabled?: string,
}

const Detail = ({
    id = "cselect",
    options = [],
    label = "",
    handlerValue,
    disabled,
}: Props) => {

    const handleChange = (event: SelectChangeEvent) => {
        handlerValue!(event.target?.value)
    }

    const labelHandler = (e: string) => {
        switch (e) {
            case 'Yil':
                return 'year';
            case "Oy":
                return 'month';
            case "Harta (Du-Ya)":
                return 'week'
            default:
                return e
        }
    }

    return (
        <>
            <div id={`cselect-${id}`}>
                {label && <CLabel title={label} />}
                <Select
                    disabled={disabled == 'year' ? true : disabled == 'week' ? false : disabled == labelHandler(label)}
                    // sx={{ m: 1, width: 112, height: 3 }}
                    defaultValue={options?.[0]?.value}
                    inputProps={{
                        "aria-label": "Without label",
                    }}
                    onChange={handleChange}
                >
                    {options.map(({ value, label }: { value: any; label: string }) => (
                        <MenuItem key={value} value={value}>{label}</MenuItem>
                    ))}
                </Select>
            </div>
        </>
    );
};

export default Detail;
