import { IOption } from "~/models";

export const WIDGET_POSITION_OPTIONS: IOption[] = [
  {
    label: "Show the calendar at the product page",
    value: "show_calendar",
  },
  {
    label: "Require the delivery date before checkout",
    value: "require_delivery",
  },
];

export const LAYOUT_OPTIONS: IOption[] = [
  { label: "Calendar", value: "calendar" },
  { label: "Date List", value: "date_list" },
];

export const CALENDAR_LANGUAGE_OPTIONS: IOption[] = [
  { label: "Australia", value: "au" },
  { label: "English", value: "en" },
  { label: "Vietnamese", value: "vi" },
];

export const DATE_FORMAT_OPTIONS: IOption[] = [
  { label: "10/05/22", value: "10/05/22" },
  { label: "10/05/23", value: "10/05/23" },
  { label: "10/05/24", value: "10/05/24" },
];

export const FIRST_DAY_OF_CALENDAR_OPTIONS: IOption[] = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
];
