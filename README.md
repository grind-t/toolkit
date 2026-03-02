# @grind-t/toolkit

Small utility toolkit for common data and string/date operations, published on JSR. The package is organized into subpath modules: `array`, `date`, `fn`, `nullish`, and `string`.

## API by Module

### `@grind-t/toolkit/array`

#### `sum(array)`

Returns the sum of numeric values.

```ts
import { sum } from "jsr:@grind-t/toolkit/array";

sum([1, 2, 3, 4]); // 10
sum([]); // 0
```

#### `sum(array, selector)`

Returns the sum of projected numeric values.

```ts
import { sum } from "jsr:@grind-t/toolkit/array";

const items = [{ value: 5 }, { value: 10 }, { value: 15 }];
sum(items, (item) => item.value); // 30
```

#### `toRecord(arrayOfStrings)`

Converts a string array into a record of `string -> index`.

```ts
import { toRecord } from "jsr:@grind-t/toolkit/array";

toRecord(["a", "b", "c"]); // { a: 0, b: 1, c: 2 }
```

#### `toRecord(array, keySelector)`

Converts an array into a record keyed by `keySelector`, values are original items.

```ts
import { toRecord } from "jsr:@grind-t/toolkit/array";

const input = [
  { id: "x", value: 10 },
  { id: "y", value: 20 },
];

const byId = toRecord(input, (item) => item.id);
// { x: { id: "x", value: 10 }, y: { id: "y", value: 20 } }
```

#### `toRecord(array, keySelector, valueSelector)`

Converts an array into a record with custom keys and transformed values.

```ts
import { toRecord } from "jsr:@grind-t/toolkit/array";

toRecord(
  [1, 2, 3],
  (_item, idx) => `key${idx}`,
  (item) => item * 10,
); // { key0: 10, key1: 20, key2: 30 }
```

### `@grind-t/toolkit/date`

#### `getCurrentMonthName(locale?)`

Returns the current month name in lowercase first-letter form for the given locale.

```ts
import { getCurrentMonthName } from "jsr:@grind-t/toolkit/date";

getCurrentMonthName("en-US"); // e.g. "march"
getCurrentMonthName("ru-RU"); // e.g. "март"
```

#### `getYearsLabel(value, locale?)`

Returns a localized year label based on plural rules.

```ts
import { getYearsLabel } from "jsr:@grind-t/toolkit/date";

getYearsLabel(1, "en-US"); // "year"
getYearsLabel(2, "en-US"); // "years"
getYearsLabel(5, "ru-RU"); // "лет"
```

### `@grind-t/toolkit/fn`

#### `firstArgument(arg)`

Returns the first argument unchanged.

```ts
import { firstArgument } from "jsr:@grind-t/toolkit/fn";

firstArgument("value"); // "value"
```

#### `secondArgument(_, arg)`

Returns the second argument unchanged.

```ts
import { secondArgument } from "jsr:@grind-t/toolkit/fn";

secondArgument("ignored", "value"); // "value"
```

### `@grind-t/toolkit/nullish`

#### `isNullish(value)`

Type guard for `null | undefined`.

```ts
import { isNullish } from "jsr:@grind-t/toolkit/nullish";

isNullish(null); // true
isNullish(undefined); // true
isNullish(0); // false
```

### `@grind-t/toolkit/string`

#### `lowerFirst(s)`

Lowercases the first character of a string.

```ts
import { lowerFirst } from "jsr:@grind-t/toolkit/string";

lowerFirst("ABC"); // "aBC"
lowerFirst(""); // ""
```

#### `upperFirst(s)`

Uppercases the first character of a string.

```ts
import { upperFirst } from "jsr:@grind-t/toolkit/string";

upperFirst("abc"); // "Abc"
upperFirst(""); // ""
```
