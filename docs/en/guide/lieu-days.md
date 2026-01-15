# In Lieu Days

## `isInLieu` Check if a given date is an in lieu day

In the context of Vietnam's holiday arrangements, **in lieu days** are adjustments to create longer continuous holidays. For example, if a public holiday falls on a weekend, the following Monday might be designated as an in lieu holiday.

### Example Usage

```js
import { isInLieu } from "vietnamese-days";

// Check if February 23, 2026 (in lieu day after Lunar New Year) is an in lieu day.
console.log(isInLieu('2026-02-23')); // true

// Check if February 17, 2026 (Lunar New Year Day) is an in lieu day.
// It returns `false` because it is an official holiday, not an in lieu adjustment.
console.log(isInLieu('2026-02-17')); // false
```