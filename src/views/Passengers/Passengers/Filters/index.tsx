import { Closer } from "../../../../components/Closer";

interface Props {
  handleOpen: (val?: any) => void;
}

const Filters = ({ handleOpen = () => {} }: Props) => {
  return (
    <div className="absolute right-0 top-[55px] z-[99] w-[200px] border border-[var(--lineGray)] rounded-[10px] bg-white">
      <div className="p-[14px]">
        
      </div>
      <Closer handleClose={() => handleOpen("")} />
    </div>
  );
};

export default Filters;
