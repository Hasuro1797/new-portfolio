declare module "*.svg" {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

export interface WeatherType {
  coord:      Coord;
  weather:    WeatherElement[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export interface Sys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

export interface WeatherElement {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
}

export interface WorkListType {
  data: WorkType[]
}

export interface WorkType {
  id: number
  title: string
  company: string
  location: string
  tyOfOcupation: string | null
  description: Languaje | null
  mode: Languaje | null
  date: DateType
}

export interface Languaje {
  en: string
  es: string
}

export interface DateType {
  since: string
  until: string
}

export interface ProjectType {
  id: number
  title: string
  image: string
  state: "Disable" | "Dead" | "Active"
  description: Languaje
  type: "Test" | "Project"
  code: string | null
  link: string | null
  technologies: TechnologyType[]
}

export interface ProyectListType {
  data: ProjectType[]
}
export interface TechnologyType {
  id: number
  label: string
  value: string
}