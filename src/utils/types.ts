export type LinkProps = {
    href: string;
    label: string;
  }

export type Show = {
  summary: string;
  start: ShowStart;
  date: string;
}

type ShowStart = {
  date?: string
  dateTime?: string;
}