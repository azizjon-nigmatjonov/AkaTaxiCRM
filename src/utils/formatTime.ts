import { format } from "date-fns"

export const FormatTime = (time: string, type?: string) => {
    if (!time) return ''
    const current = new Date(time)
    const timeFormat = "HH:MM "
    const dateFormat = ' dd.MM.yyyy'

    switch (type) {
        case "time":
            return [format(current, timeFormat), format(current, dateFormat)]
        default:
            return format(current, dateFormat)
    }
} 