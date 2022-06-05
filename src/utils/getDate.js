export const getDate = (dateString, format) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(dateString);
  if (format === "mm/yyyy") {
    return `${month[date.getMonth()]} ${date.getYear() + 1900}`;
  } else {
    return `${month[date.getMonth()]} ${date.getDate()} ${
      date.getYear() + 1900
    }`;
  }
};
