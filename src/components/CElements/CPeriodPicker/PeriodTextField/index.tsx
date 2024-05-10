import { memo, useMemo } from "react";
import { TextField } from "@mui/material";
import "../style.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import usePageRouter from "../../../../hooks/useObjectRouter";

interface Props {
  label?: string;
  control?: any;
  name: string;
  placeholder?: string;
  defaultValue?: any;
  position?: string;
  handleDropdown: () => void;
}

export const PeriodTextField = memo(
  ({ name, placeholder, defaultValue, handleDropdown }: Props) => {
    const { getQueries } = usePageRouter();
    const query = getQueries();

    const value = useMemo(() => {
      query?.start && query?.end
        ? query?.start.slice(5) + " - " + query.end.slice(5)
        : "Tanlang";
    }, [query.start, query.end]);

    return (
      <div className="HFInput z-20 relative">
        <div className="relative ">
          <TextField
            size="small"
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            InputProps={{
              readOnly: true,
              endAdornment: <IoMdArrowDropdown size={18} />,
            }}
            onClick={() => handleDropdown()}
            style={{ background: "white" }}
          />
        </div>
      </div>
    );
  }
);
