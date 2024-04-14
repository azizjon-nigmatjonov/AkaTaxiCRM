import React from "react";

interface Props {
    children?: React.ReactNode,
    filter?: boolean
}

const Filters = ({ children, filter }: Props) => {
    return (
        <div className={`${filter ? 'flex' : 'hidden'} mb-6 items-center gap-2`}>
            {children}
        </div>
    )
}

export default Filters