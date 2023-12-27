const getCurrentMonth = () => {
  const currentDate = new Date();
  return currentDate.getMonth();
};

const getDaysInCurrentMonth = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
};

const currentMonth = getCurrentMonth() + 1;
const days = getDaysInCurrentMonth();

const getFirstDayOfMonth = () => {
  const currentDate = new Date();
  currentDate.setDate(1); // Set the date to the first day of the month
  const dayOfWeek = currentDate.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  return dayOfWeek;
};

const firstDayOfWeek = getFirstDayOfMonth();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const firstDay = daysOfWeek[firstDayOfWeek];

export const GetMonth = () => {
  return { firstDay, days, currentMonth };
};
