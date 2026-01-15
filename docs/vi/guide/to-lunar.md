# Chuyển đổi Dương lịch sang Âm lịch

::: info Gợi ý
Âm lịch được sử dụng rộng rãi trong văn hóa Việt Nam để tính ngày lễ Tết và các dịp kỷ niệm truyền thống.
:::

::: info Ví dụ đặc biệt
1. `2057-09-28` là: Năm Đinh Sửu (Trâu), tháng Tám, ngày Ba Mươi âm lịch;
2. `2097-08-07` là: Năm Đinh Tỵ (Rắn), tháng Bảy, ngày Mùng Một âm lịch.
:::

## Chuyển đổi Dương lịch sang Âm lịch

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

// Ví dụ về tháng thường và tháng nhuận
console.log(getLunarDate('2001-04-27'));
console.log(getLunarDate('2001-05-27'));
```

## Lấy danh sách ngày âm lịch theo khoảng thời gian dương lịch

```js
import { getLunarDatesInRange } from "vietnamese-days";

console.log(getLunarDatesInRange('2026-05-21', '2026-05-26'));
```