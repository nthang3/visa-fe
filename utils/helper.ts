import moment from "moment";

export const convertDateTime = (timestamp: string) => {
  try {
    return moment(timestamp).local().format("YYYY.MM.DD HH:mm:ss");
  } catch (error) {
    return "-";
  }
};

export const chunkArray = (array: any[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export const convertDetailTime = (timestamp: string) => {
  try {
    var dt_object = new Date(timestamp);
    if (!timestamp || !dt_object || isNaN(dt_object.getTime())) {
      return "-";
    }
    var formatted_timestamp =
      dt_object.getFullYear() +
      "-" +
      ("0" + (dt_object.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + dt_object.getDate()).slice(-2) +
      " " +
      ("0" + dt_object.getHours()).slice(-2) +
      ":" +
      ("0" + dt_object.getMinutes()).slice(-2) +
      ":" +
      ("0" + dt_object.getSeconds()).slice(-2);
    return formatted_timestamp;
  } catch (error) {
    return "-";
  }
};