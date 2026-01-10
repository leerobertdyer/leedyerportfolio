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
    )}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`;

  const res = await fetch(url);
  const data = await res.json();
  const filteredEvents = data.items.filter((e: any) => {
    const startStr = e.start.dateTime || e.start.date;
    const startDate = new Date(startStr);

    return startDate > today && startDate < oneYearFromNow;
  });

  const cleanedAndFiltered = filteredEvents.map((e: Show) => {
    let date = e.start.date ? formatDate(e.start.date, "EEEE MMMM do") : e.start.dateTime ? formatDate(e.start.dateTime, "EEE, MMMM do - h:mmaaa") : ''
    return {...e, date}
  })
  return cleanedAndFiltered;
}


export function isAppleDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  const ua = navigator.userAgent;
  
  const isIPhone = /iPhone|iPod/.test(ua);
  
  const isIPad = /iPad/.test(ua) || 
    (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
  
  const isMac = /Macintosh/.test(ua) && navigator.maxTouchPoints === 0;
  
  return isIPhone || isIPad || isMac;
};