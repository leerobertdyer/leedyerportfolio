import { Show } from "@/utils/types";
import { addYears, formatDate, startOfDay } from "date-fns";

export async function getOneYearsEventsGoogleCal({
  CAL_ID,
  API_KEY,
}: {
  CAL_ID: string;
  API_KEY: string;
}) {
  const today = startOfDay(new Date())
  const oneYearFromNow = addYears(today, 1);
  const url =
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      CAL_ID
    )}/events` + `?key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const filteredEvents = data.items.filter((e: any) => {
    const startStr = e.start.dateTime || e.start.date;
    const startDate = new Date(startStr);

    return startDate > today && startDate < oneYearFromNow;
  });
  const cleanedAndFiltered = filteredEvents.map((e: Show) => {
    let date = e.start.date ? formatDate(e.start.date, "EEEE MMM do") : e.start.dateTime ? formatDate(e.start.dateTime, "EEEE MMM do h:MMdaaa") : ''
    return {...e, date}
  })
  return cleanedAndFiltered;
}
