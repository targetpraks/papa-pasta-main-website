export type EventItem = {
  name: string;
  date: string;
  time: string;
  loc: string;
  status: "Past Event" | "RSVP Open" | "Coming Soon";
};

export const events: EventItem[] = [
  {
    name: "Cape Town Pasta Festival",
    date: "15 May 2026",
    time: "11:00-20:00",
    loc: "V&A Waterfront",
    status: "Past Event",
  },
  {
    name: "Franchise Discovery Day",
    date: "3 June 2026",
    time: "09:00-12:00",
    loc: "Franchise portal + Cape Town HQ",
    status: "Past Event",
  },
  {
    name: "Heritage Bowl Launch",
    date: "16 June 2026",
    time: "All day",
    loc: "All open locations",
    status: "RSVP Open",
  },
  {
    name: "Johannesburg Tasting Tour",
    date: "July 2026",
    time: "TBD",
    loc: "Rosebank + Sandton",
    status: "Coming Soon",
  },
  {
    name: "Durban Beachfront Pop-Up",
    date: "August 2026",
    time: "TBD",
    loc: "Durban Promenade",
    status: "Coming Soon",
  },
];
