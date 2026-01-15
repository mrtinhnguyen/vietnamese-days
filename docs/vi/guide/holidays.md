# Ngày lễ

## `isHoliday`: Kiểm tra một ngày có phải là ngày lễ hay không

```js
console.log(isHoliday('2026-01-01')); // true
```

## `getHolidaysInRange`: Lấy danh sách tất cả các ngày lễ trong một khoảng thời gian

Nhận vào ngày bắt đầu và ngày kết thúc, và tùy chọn có bao gồm cuối tuần hay không. Nếu bao gồm cuối tuần, hàm sẽ trả về tất cả các ngày lễ bao gồm cả cuối tuần; nếu không, nó chỉ trả về các ngày lễ trúng vào ngày làm việc.

::: info Gợi ý
Ngay cả khi không bao gồm cuối tuần, các ngày lễ trúng vào cuối tuần vẫn sẽ được trả về.
:::

```js
// Ví dụ sử dụng
const start = '2026-04-26';
const end = '2026-05-06';

// Lấy tất cả các ngày lễ từ 2026-04-26 đến 2026-05-06, bao gồm cả cuối tuần
const holidaysIncludingWeekends = getHolidaysInRange(start, end, true);
console.log('Ngày lễ (bao gồm cuối tuần):', holidaysIncludingWeekends.map(d => getDayDetail(d)));

// Lấy danh sách ngày lễ trong cùng khoảng thời gian, không bao gồm cuối tuần
const holidaysExcludingWeekends = getHolidaysInRange(start, end, false);
console.log('Ngày lễ (không bao gồm cuối tuần):', holidaysExcludingWeekends.map(d => getDayDetail(d)));
```
