"use client";

import { useEffect, useState } from "react";
import { ImCompass } from "react-icons/im";
import { getOneYearsEventsGoogleCal, isAppleDevice } from "@/utils/utils";
import { Show } from "@/utils/types";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY || "";

interface ShowsSectionProps {
  calendarId: string;
}

export default function ShowsSection({ calendarId }: ShowsSectionProps) {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [mapLinkBaseUrl, setMapLinkBaseUrl] = useState(
    "https://www.google.com/maps/search/?api=1&query="
  );

  useEffect(() => {
    if (isAppleDevice()) {
      setMapLinkBaseUrl("maps://maps.apple.com/?q=");
    }
  }, []);

  useEffect(() => {
    const getShows = async () => {
      const resp = await getOneYearsEventsGoogleCal({
        CAL_ID: calendarId,
        API_KEY,
      });
      setShows(resp);
      setLoading(false);
    };

    getShows();
  }, [calendarId]);

  if (!shows) return null;

  return (
    <div className="md:relative bg-myBlack-dark bg-opacity-90 rounded-md p-6 flex flex-col items-center justify-center w-[20rem] md:w-[45rem] h-fit md:h-[38rem] overflow-y-auto text-sm md:text-lg">
      <h2 className="text-2xl mb-4 md:absolute md:top-[2rem] md:left-1/2 md:-translate-x-1/2">
        Upcoming Shows
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        shows.map((show: Show, key) => (
          <div key={key} className="w-full">
            {/* Mobile layout */}
            <div className="md:hidden flex flex-col items-center text-center gap-1 mb-6 w-full">
              <p className="text-myPink-base text-lg">{show.summary}</p>
              <div className="text-myWhite-light flex justify-center items-center gap-4 w-full">
                {show.date}
                {show.location && (
                  <a
                    href={`${mapLinkBaseUrl}${encodeURIComponent(
                      show.location
                    )}`}
                    target="_blank"
                    className="text-myBlue-base flex items-center gap-2"
                  >
                    <ImCompass />
                  </a>
                )}
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:grid grid-cols-5 text-lg gap-2 w-full">
              <p className="text-myPink-base col-span-2">{show.summary}</p>
              <p className="text-myWhite-light col-span-2">{show.date}</p>
              {show.location && (
                <a
                  href={`${mapLinkBaseUrl}${encodeURIComponent(show.location)}`}
                  target="_blank"
                  className="text-myBlue-base flex items-center gap-2 col-span-1"
                >
                  <ImCompass /> Map
                </a>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

