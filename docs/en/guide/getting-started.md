# Quick Start

This documentation is primarily intended for users developing in `JS` and `TS`.

::: info Note
For other programming languages, please refer to the section on [Non-JS Languages](/en/guide/what-is-vietnamese-days.html#non-js-languages).

Additionally, the project supports `iCal` file [holiday subscriptions](/en/guide/ical-subscription), compatible with clients such as Google Calendar, Apple Calendar, and Microsoft Outlook.
:::

## Recommended Usage

Directly include the library in the browser for the most up-to-date version:

```html
<!-- Include the script -->
<script src="https://cdn.jsdelivr.net/npm/vietnamese-days"></script>

<!-- Use the library -->
<script>
  vietnameseDays.isHoliday('2026-01-01');
  // Or use destructuring
  const { isHoliday } = vietnameseDays;
</script>
```

Alternatively, use `type="module"` with ESM:

```html
<script type="module">
  import vietnameseDays from 'https://esm.run/vietnamese-days';
  // Use the library after importing
  vietnameseDays.isHoliday('2026-01-01');
</script>
```

## Installation

```sh
npm i vietnamese-days
```

Using ESM import:

```ts
import vietnameseDays from 'vietnamese-days';
console.log(vietnameseDays);
```

Using in Node.js:

```js
const { isWorkday, isHoliday } = require('vietnamese-days');
console.log(isWorkday('2026-01-01'));
console.log(isHoliday('2026-01-01'));
```

## Specifying a Version

It is generally not recommended to specify a version, as holidays are updated according to official announcements. If you must specify a version, you can refer to [jsdelivr](https://www.jsdelivr.com/), for example:

```
https://cdn.jsdelivr.net/npm/vietnamese-days@1.0.0
```

```
https://esm.run/vietnamese-days@1.0.0
```