import { FormatTime } from "../../../../../../utils/formatTime"

export const headColums = [
    {
        title: 'Summa',
        id: 'amount',
        render: (val?: any, item?: any) => val && (
            <p className={item.type == 'income' ? 'text-[var(--green)]' : 'text-[var(--main)]'}>{item.type == 'income' ? '+' : '-' + val + ' ' + "so'm"}</p>
        )
    },
    {
        title: 'tranzaksiya turi',
        id: "type",
        render: (val?: any) => val && (
            <p >{val == 'income' ? 'Hisob to’ldirildi' : 'Komissiya olindi'}</p>
        )
    },
    {
        title: 'Sana',
        id: 'created_at',
        render: (val?: any) => val && (
            FormatTime(val)
        )
    }
]
