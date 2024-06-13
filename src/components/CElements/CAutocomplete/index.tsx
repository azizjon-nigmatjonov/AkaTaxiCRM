import { Autocomplete, TextField } from "@mui/material";
import './style.scss'

interface Props {
  options: any;
}

export const CAutocomplete = ({ options }: Props) => {
  return (
    <div id="autocomplete">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
};
