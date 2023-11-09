import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface Props {
  id?: string;
  options: any;
}

const CSelect = ({ id = "cselect", options = [] }: Props) => {
  return (
    <div id={`cselect-${id}`}>
      <Select        
        defaultValue={options[0].value}
        inputProps={{
          "aria-label": "Without label",
        }}
      >
        {options.map(({ value, label }: { value: any; label: string }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CSelect;
