export const pad = (num) => {
  return ("0" + num).slice(-2);
};
export const getTimeFromDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "pm" : "am";
  if (hours > 12) hours = hours - 12;
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + ampm;
};

// generate here because it is constant,
// we don't need to recreate the array every time we render a date,
// which could save hundreds of arrays from being created in memory
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getDatePostfix = function (day) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const getPrettyDayOfMonth = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const monthName = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  return `${monthName} ${dayOfMonth + getDatePostfix(dayOfMonth)}`;
};

export const getPrettyTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";
  if (hours > 12) hours = hours - 12;
  return pad(hours) + ampm;
};
