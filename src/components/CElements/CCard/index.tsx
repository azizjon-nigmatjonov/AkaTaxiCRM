import { ReactNode } from "react";

interface Props {
  classes?: string;
  children?: ReactNode;
  style?: any;
  title?: string;
}

const CCard = ({ classes = "", style, children, title = "" }: Props) => {
  return (
    <div>
      {title ? <h2 className="mb-2">{title}</h2> : ""}
      <div
        style={style}
        className={`p-6 bg-white rounded-[18px] min-h-[500px] border border-[var(--gray20)] common-shadow ${classes}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CCard;
