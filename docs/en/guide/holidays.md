# Holidays

## `isHoliday` Check if a given date is a holiday

```js
import { isHoliday } from "vietnamese-days";

console.log(isHoliday('2026-01-01')); // true
```

## `getHolidaysInRange` Retrieve all holidays within a specified date range

This function accepts a start date, an end date, and an optional parameter to decide whether to include weekends. If weekends are included, the function returns all holidays, including those that fall on weekends. If weekends are excluded, it only returns holidays on workdays.

::: info Note
Even if weekends are excluded, holidays that fall on weekends will still be included in the result if they are official holidays.
:::

```js
import { getHolidaysInRange, getDayDetail } from "vietnamese-days";

// Example usage
const start = '2026-04-26';
const end = '2026-05-06';

// Get all holidays including weekends
const holidaysIncludingWeekends = getHolidaysInRange(start, end, true);
console.log(
  'Holidays including weekends:',
  holidaysIncludingWeekends.map((d) => getDayDetail(d))
);

// Get holidays excluding weekends
const holidaysExcludingWeekends = getHolidaysInRange(start, end, false);
console.log(
  'Holidays excluding weekends:',
  holidaysExcludingWeekends.map((d) => getDayDetail(d))
);
```