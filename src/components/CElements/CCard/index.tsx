import { ReactNode } from "react";

interface Props {
    classes?: string;
    children?: ReactNode;
    style?: any
}

const CCard = ({classes = '', style, children}: Props) => {
    return <div style={style} className={`p-6 bg-white rounded-[10px] min-h-[500px] border border-[var(--lightGray)] ${classes}`}>{children}</div>
}

export default CCard