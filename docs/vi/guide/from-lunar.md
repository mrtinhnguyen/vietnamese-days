# Chuyển đổi Âm lịch sang Dương lịch

Khi rơi vào tháng nhuận, một ngày âm lịch có thể tương ứng với hai ngày dương lịch khác nhau, vì vậy hàm trả về dưới dạng đối tượng.

```js
import { getSolarDateFromLunar } from "vietnamese-days";

console.log(getSolarDateFromLunar('2001-03-05'));
// {date: '2001-03-29', leapMonthDate: undefined}

console.log(getSolarDateFromLunar('2001-04-05'));
// {date: '2001-04-27', leapMonthDate: '2001-05-27'}
```