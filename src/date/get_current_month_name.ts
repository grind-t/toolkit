import { lowerFirst } from "../string/lower_first.ts";

export function getCurrentMonthName(locale = navigator.language): string {
  const formatter = new Intl.DateTimeFormat(locale, { month: "long" });
  return lowerFirst(formatter.format(Date.now()));
}
