import dayjs from "dayjs";

const addZero = (num: number) => {
  return num < 10 ? num.toString().padStart(2, "0") : num;
};

function getStartOfWeek(date: any) {
  const day = date.getDay(); // Get the current day of the week (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday (day === 0)
  return new Date(date.setDate(diff)); // Set the date to the previous Monday
}

function getEndOfWeek(date: any) {
  const startOfWeek = getStartOfWeek(new Date(date)); // Get the start of the week
  return new Date(startOfWeek.setDate(startOfWeek.getDate() + 6)); // Add six days to get the end of the week
}

const Usually = (
  currentYear: number,
  currentMonth: number,
  currentDay: number,
  currentTime: string,
  symbol = "."
) => {
  return `${currentYear}${symbol}${addZero(currentMonth)}${symbol}${addZero(
    currentDay
  )} ${currentTime}`;
};

const Today = (
  currentYear: number,
  currentMonth: number,
  currentDay: number
) => {
  return `${currentYear}-${addZero(currentMonth)}-${addZero(currentDay)}`;
};

const Hourly = (currentTime: string) => {
  return `${currentTime}`;
};

const Week = () => {
  const now = new Date();

  const startOfWeek = getStartOfWeek(new Date(now));
  const endOfWeek = getEndOfWeek(new Date(now));

  return `${startOfWeek.toISOString().split("T")[0]}, ${
    endOfWeek.toISOString().split("T")[0]
  }`;
};

const Month = (currentYear: number, currentMonth: number) => {
  const now = new Date();
  const nextMonth: any = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const lastDay = new Date(nextMonth - 1);

  const lastData = lastDay.getDate();
  return (
    `${currentYear}-${addZero(currentMonth)}-${addZero(1)}` +
    "," +
    `${currentYear}-${addZero(currentMonth)}-${addZero(lastData)}`
  );
};

export const GetCurrentDate = ({
  date,
  type,
  symbol,
}: {
  date?: any;
  type?: string;
  symbol?: any;
}) => {
  const currentDate = date ? dayjs(date) : dayjs();
  const currentYear = currentDate.year();
  const currentMonth = currentDate.month() + 1;
  const currentDay = currentDate.date();
  const currentTime = currentDate.format("HH:mm");

  switch (type) {
    case "month":
      return Month(currentYear, currentMonth);
    case "week":
      return Week();
    case "today":
      return Today(currentYear, currentMonth, currentDay);
    case "usually":
      return Usually(
        currentYear,
        currentMonth,
        currentDay,
        currentTime,
        symbol
      );
    default:
      return Hourly(currentTime);
  }
};

export const ConvertTimeStamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Step 3: Format the components into 'year-month-day hour:minute'
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

  return formattedDate
};
