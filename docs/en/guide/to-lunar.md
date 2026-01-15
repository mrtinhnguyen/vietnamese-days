# Solar to Lunar Calendar Conversion

::: info Tip
The lunar calendar is widely used in Vietnamese culture for traditional festivals and anniversaries.
:::

::: info Examples
1. `2057-09-28` corresponds to: Year of the Ox, Eighth Month, Thirtieth Day;
2. `2097-08-07` corresponds to: Year of the Snake, Seventh Month, First Day.
:::

## Convert Solar Date to Lunar Date

```js
import { getLunarDate } from "vietnamese-days";

// 2097-8-7
console.log(getLunarDate('2097-08-07'));

// 2057-9-28
console.log(getLunarDate('2057-09-28'));
// {
//   date: "2057-09-28",
//   lunarYear: 2057,
//   lunarMon: 8,
//   lunarDay: 30,
//   isLeap: false,
//   lunarDayCN: "Ba Mươi",
//   lunarMonCN: "Tháng Tám",
//   lunarYearCN: "HaiKhôngNămBảy",
//   yearCyl: "Đinh Sửu",
//   monCyl: "Kỷ Dậu",
//   dayCyl: "Mậu Tý",
//   zodiac: "Trâu"
// }

// Examples of non-leap and leap months
console.log(getLunarDate('2001-04-27'));
console.log(getLunarDate('2001-05-27'));
```

## Batch Retrieve Lunar Dates for a Range of Solar Dates

```js
import { getLunarDatesInRange } from "vietnamese-days";

console.log(getLunarDatesInRange('2026-05-21', '2026-05-26'));
```