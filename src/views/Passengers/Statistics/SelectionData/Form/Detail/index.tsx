import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CLabel from "../../../../../../components/CElements/CLabel";

interface Props {
  id?: string;
  options: any;
  label?: string;
  handlerValue?: (val: any) => void;
  disabled?: any;
  defaultValue?: any
}

const Detail = ({
  defaultValue,
  id = "cselect",
  options = [],
  label = "",
  handlerValue,
  disabled,
}: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    handlerValue!(event.target?.value);
  };

  

  return (
    <>
      <div id={`cselect-${id}`}>
        {label && <CLabel title={label} />}
        <Select
          disabled={ disabled }
          sx={{ m: 1, width: '100%', }}
          defaultValue={defaultValue || options?.[0]?.value}
          inputProps={{
            "aria-label": "Without label",
          }}
          onChange={handleChange}
        >
          {options.map(({ value, label }: { value: any; label: string }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
};

export default Detail;
