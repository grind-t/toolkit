export function getYearsLabel(
  value: number,
  locale = navigator.language
): string {
  const pluralForm = new Intl.PluralRules(locale).select(Math.floor(value));

  if (locale.startsWith("ru")) {
    const yearForms = {
      zero: "лет",
      one: "год",
      two: "года",
      few: "года",
      many: "лет",
      other: "лет",
    };

    return yearForms[pluralForm];
  }

  const yearForms = {
    zero: "years",
    one: "year",
    two: "years",
    few: "years",
    many: "years",
    other: "years",
  };

  return yearForms[pluralForm];
}
