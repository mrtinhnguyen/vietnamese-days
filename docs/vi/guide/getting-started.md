# Bắt đầu nhanh

Tài liệu này chủ yếu dành cho người dùng phát triển bằng `JS` và `TS`.

::: info Gợi ý
Nếu phát triển bằng ngôn ngữ khác, vui lòng tham khảo phần [Ngôn ngữ khác](/guide/what-is-vietnamese-days#các-ngôn-ngữ-khác).
:::

::: info Đăng ký
Ngoài ra còn hỗ trợ [đăng ký ngày lễ](/guide/ical-subscription) qua file `iCal`, có thể sử dụng cho Google Calendar, Apple Calendar, Microsoft Outlook, v.v.
:::

## Cách thức khuyến nghị

Nhúng trực tiếp vào trình duyệt, cập nhật kịp thời nhất:

```html
<!-- Nhúng -->
<script src="https://cdn.jsdelivr.net/npm/vietnamese-days"></script>

<!-- Sử dụng -->
<script>
  vietnameseDays.isHoliday('2026-01-01');
  // Hoặc sử dụng giải nén (destructuring)
  const { isHoliday } = vietnameseDays;
</script>
```

Hoặc chỉ định `type="module"`, sử dụng ESM:

```html
<script type="module">
  import vietnameseDays from 'https://esm.run/vietnamese-days'
  // Sử dụng sau khi import
  vietnameseDays.isHoliday('2026-01-01')
</script>
```

## Cài đặt

```sh
npm i vietnamese-days
```

Sử dụng ESM import

```ts
import vietnameseDays from 'vietnamese-days';
console.log(vietnameseDays);
```

Sử dụng trong Node.js

```js
const { isWorkday, isHoliday } = require('vietnamese-days');
console.log(isWorkday('2026-01-01'));
console.log(isHoliday('2026-01-01'));
```

## Chỉ định phiên bản

Thông thường không nên chỉ định phiên bản vì ngày lễ sẽ được cập nhật theo thông báo của Chính phủ; nếu nhất thiết phải chỉ định phiên bản, bạn có thể tham khảo [jsdelivr](https://www.jsdelivr.com/), ví dụ:

```
https://cdn.jsdelivr.net/npm/vietnamese-days@1.0.0
```

```
https://esm.run/vietnamese-days@1.0.0
```