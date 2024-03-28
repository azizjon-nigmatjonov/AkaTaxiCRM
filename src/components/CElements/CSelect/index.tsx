import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CLabel from "../CLabel";

interface Props {
  id?: string;
  options: any;
  label?: string;
  handlerValue?: (val: any) => void
  // classes?: string;
  disabled?: boolean
}

const CSelect = ({
  id = "cselect",
  options = [],
  label = "",
  handlerValue,
  disabled
}: Props) => {

  const handleChange = (event: SelectChangeEvent) => {
    handlerValue!(event.target?.value)
  }

  return (
    <>
      <div id={`cselect-${id}`}>
        {label && <CLabel title={label} />}
        <Select
          disabled={disabled}
          // sx={{ m: 1, width: 112, height: 3 }}
          defaultValue={options?.[0]?.value}
          placeholder="Barchasi"
          inputProps={{
            "aria-label": "Without label",
          }}
          onChange={handleChange}
        >
          {options.map(({ value, label }: { value: any; label: string }) => (
            <MenuItem key={value} value={value}> {label}</MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
};

export default CSelect;
