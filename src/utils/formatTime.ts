import { format } from "date-fns"

export const FormatTime = (time: string, type?: string) => {


    // if (!time) return '';
    // const current = new Date(time);

    // const timeFormat = 'HH:mm '
    // const dateFormat = 'yyyy-MM-dd'

    //     const formattedDate = new Intl.DateTimeFormat('en-US', {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //         // second: '2-digit',
    //         day: '2-digit',
    //         month: '2-digit',
    //         year: 'numeric',
    //         timeZone: 'UTC',
    //         hour12: false
    //     }).format(new Date(time));


    switch (type) {
        case "time":
            // return formattedDate
            return time
        default:
            return time
        // return format(current ,dateFormat)
    }
}


export const FormatCalendar = (time: any) => {
    // const timeFormat = 'HH:mm '
    const dateFormat = 'yyyy-MM-dd'

    // const formattedDate = new Intl.DateTimeFormat('en-US', {
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     // second: '2-digit',
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric',
    //     timeZone: 'UTC',
    //     hour12: false
    // }).format(new Date(time));

    


    return format(time, dateFormat)
} 