import { ExcelIcon } from "../../../components/UI/IconGenerator/Svg";
import { FetchFunction } from "./Logic";

interface Props {
  filterParams?: any;
}

export const CExcelDownloader = ({ filterParams = {} }: Props) => {
  // if (!filterParams) return;
  
  const { downloadExcel } = FetchFunction();
  
  return (
    <button
      onClick={() => downloadExcel(filterParams)}
      className="default-btn whitespace-nowrap space-x-3"
    >
      <ExcelIcon />
      <span>Excel yuklash</span>
    </button>
  );
};
