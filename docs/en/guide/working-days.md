# Working Days

## `isWorkday` Check if a given date is a workday

```js
import { isWorkday } from "vietnamese-days";

console.log(isWorkday('2026-01-01')); // false
```

## `getWorkdaysInRange` Get a list of workdays within a specified date range

This function takes a start date, an end date, and an optional parameter to decide whether to include weekends. If weekends are included, the function returns all workdays including those in lieu. Otherwise, it returns only weekdays (Monday to Friday).

```js
import { getWorkdaysInRange } from "vietnamese-days";

// Example usage
const start = '2026-04-26';
const end = '2026-05-06';

// Get all workdays from 2026-04-26 to 2026-05-06, including weekends
const workdaysIncludingWeekends = getWorkdaysInRange(start, end, true);
console.log('Workdays including weekends:', workdaysIncludingWeekends);

// Get workdays from 2026-04-26 to 2026-05-06, excluding weekends
const workdaysExcludingWeekends = getWorkdaysInRange(start, end, false);
console.log('Workdays excluding weekends:', workdaysExcludingWeekends);
```

## `findWorkday` Find a workday

Find the `{deltaDays}`-th workday starting from today.

```js
import { findWorkday } from "vietnamese-days";

// Find the {deltaDays}-th workday from today
// If deltaDays is 0, first check if today is a workday. If yes, return today's date.
// If today is not a workday, find the next workday.
const currentWorkday = findWorkday(0);
console.log(currentWorkday);

// Find the next workday
const nextWorkday = findWorkday(1);
console.log(nextWorkday);

// Find the previous workday
const previousWorkday = findWorkday(-1);
console.log(previousWorkday);

// Specify a starting date to find workdays relative to it
// Find the second workday from 2026-05-18
const secondNextWorkday = findWorkday(2, '2026-05-18');
console.log(secondNextWorkday);
```

## `getDayDetail` Get detailed date information

This function checks if a specified date is a workday and returns a boolean indicating whether it is a workday, along with details about the date.

1. If the specified date is a workday, it returns `true` and the name of the weekday. If it is a rescheduled workday, it returns `true` and details about the holiday.
2. If it is a holiday, it returns `false` and holiday details.

```js
import { getDayDetail } from "vietnamese-days";

// Example usage

// A regular workday (Friday)
console.log(getDayDetail('2026-01-02')); 
// { "date": "2026-01-02", "work": true, "name": "Friday" }

// A holiday (weekend)
console.log(getDayDetail('2026-01-03')); 
// { "date": "2026-01-03", "work": false, "name": "Saturday" }

// A New Year's Day holiday
console.log(getDayDetail('2026-01-01')); 
// { "date": "2026-01-01", "work": false, "name": "New Year's Day, Tết Dương lịch" }
```