import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CLabel from "../CLabel";

interface Props {
  id?: string;
  options: any;
  label?: string;
  // classes?: string;
}

const CSelect = ({
  id = "cselect",
  options = [],
  label = "",
 
}: Props) => {

  
  return (
    <>
      {label && <CLabel title={label} />}
      <div id={`cselect-${id}`}>
        <Select
          // sx={{ m: 1, width: 112, height: 3 }}
          defaultValue={options?.[0]?.value}
          inputProps={{
            "aria-label": "Without label",
          }}
        >
          {options.map(({ value, label }: { value: any; label: string }) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
};

export default CSelect;
