export type LinkProps = {
    href: string;
    label: string;
  }

export type Show = {
  summary: string;
  start: ShowStart;
  date: string;
  location?: string;
}

type ShowStart = {
  date?: string
  dateTime?: string;
}

export type Song = {
  id: number;
  artist_id: number;
  title: string;
  src: string | null;
  img: string | null;
  is_cover: boolean;
  songwriter: string;
}

export type Video = {
  id: number;
  youtube_id: string;
  title: string;
  artist_id: number;
  is_featured: boolean;
  show_on_main: boolean;
}