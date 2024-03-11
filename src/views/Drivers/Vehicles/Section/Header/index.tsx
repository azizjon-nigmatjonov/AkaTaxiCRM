interface Props {
    standart?: number,
    comfort?: number,
    bussniss?: number
}

const Header = ({ standart = 0, comfort = 0, bussniss = 0 }: Props) => {
    return (
        <div className="grid grid-cols-3 bg-white p-3 border-b">
            <p className="text-xs font-medium text-[#475467] flex items-center gap-2">Standart <span className="bg-[var(--lineGray)] h-6 w-6 grid place-items-center items-center rounded-full text-[var(--black)]">{standart}</span></p>
            <p className="text-xs font-medium text-[#475467] flex items-center gap-2">Kamfort <span className="bg-[var(--lineGray)] h-6 w-6 grid place-items-center items-center rounded-full text-[var(--black)]">{comfort}</span></p>
            <p className="text-xs font-medium text-[#475467] flex items-center gap-2">Biznes <span className="bg-[var(--lineGray)] h-6 w-6 grid place-items-center items-center rounded-full text-[var(--black)]">{bussniss}</span></p>
        </div>
    )
}

export default Header