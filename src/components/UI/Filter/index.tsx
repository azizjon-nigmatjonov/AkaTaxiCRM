import React from "react";

interface Props {
    children?: React.ReactNode,
    filter?: boolean,
    classes?:any
}

const Filters = ({ children, filter, classes }: Props) => {
    return (
        <div className={`${filter ? 'flex' : 'hidden'} mb-6 items-center gap-2 ${classes}`}>
            {children}
        </div>
    )
}

export default Filters