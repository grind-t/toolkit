import { lowerFirst } from "../string/lowerFirst";

export function getCurrentMonthName(locale = navigator.language): string {
  const formatter = new Intl.DateTimeFormat(locale, { month: "long" });
  return lowerFirst(formatter.format(Date.now()));
}
