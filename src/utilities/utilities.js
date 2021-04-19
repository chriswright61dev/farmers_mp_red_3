// functions for use in other components

export function DateFormat(dateTimeString) {
  // fix data from api

  const datesarray = dateTimeString.split(" ");
  // console.log("datesarray", datesarray);

  const justDates = {};
  justDates.dayofweek = datesarray[0].slice(0, -1);
  justDates.day = datesarray[2].slice(0, -1);
  justDates.month = datesarray[1];
  justDates.year = datesarray[3];
  justDates.hour = datesarray[5].slice(0, 2);
  justDates.mins = datesarray[5].slice(3, 5);

  // console.log("justDates", justDates);

  let miniMins = justDates.mins;
  // don't want :00pm
  miniMins = miniMins === "00" ? "" : ":" + miniMins;

  let hour = parseInt(justDates.hour);
  if (hour < 12) {
    justDates.ampm = justDates.hour + miniMins + "am";
  }
  if (hour === 12) {
    justDates.ampm = justDates.hour + miniMins + "pm";
  }
  if (hour > 12) {
    justDates.ampm = hour - 12 + miniMins + "pm";
  }

  if (justDates.day === "1") {
    justDates.daysuffix = "1st";
  } else if (justDates.day === "2") {
    justDates.daysuffix = "2nd";
  } else if (justDates.day === "3") {
    justDates.daysuffix = "3rd";
  } else if (justDates.day === "21") {
    justDates.daysuffix = "21st";
  } else if (justDates.day === "22") {
    justDates.daysuffix = "22nd";
  } else if (justDates.day === "23") {
    justDates.daysuffix = "23rd";
  } else {
    justDates.daysuffix = justDates.day + "th";
  }

  return justDates;
}
