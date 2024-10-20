import { format } from "date-fns";
import dayjs from "dayjs";

const convertSeconds = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours} ${hours > 1 ? "soat" : ""} ${minutes} ${
      minutes > 0 ? "minut" : ""
    }`;
  } else {
    return `${minutes} minut`;
  }
};

const convertMinutesIntoHours = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const formattedTime = `${hours} soat ${minutes} minut`;

  return formattedTime;
};

export const FormatTime = (time: any, type?: string) => {
  switch (type) {
    case "time":
      return time;
    case "secunds":
      return convertSeconds(time);
    case "minutes":
      return convertMinutesIntoHours(time);
    default:
      return time;
  }
};

export const FormatCalendar = (time: any) => {
  const dateFormat = "yyyy-MM-dd";

  return format(time, dateFormat);
};

export const GetTimeFutureBack = (time = "") => {
  if (time) {
    const date = dayjs(time, "DD-MM-YYYY HH:mm");
    const newDate = date.add(30, "day");

    const currentDate = dayjs();
    const daysLeft = newDate.diff(currentDate, "day");

    return daysLeft
  }
};
