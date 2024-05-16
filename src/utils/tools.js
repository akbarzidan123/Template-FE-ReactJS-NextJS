import moment from "moment";

export const dateParser = (date) => {
  if (typeof date == "undefined") return "";
  if (date == "Invalid date") return "";
  if (date == "") return "";

  let newDate = date.replace(" ", " ");
  newDate = moment(newDate).format("YYYY-MM-DD");
  return newDate;
};
