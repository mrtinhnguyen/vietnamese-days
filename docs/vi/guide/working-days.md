# Ngày làm việc

## `isWorkday`: Kiểm tra một ngày có phải là ngày làm việc hay không

```js
console.log(isWorkday('2026-01-01')); // false
```

## `getWorkdaysInRange`: Lấy danh sách các ngày làm việc trong một khoảng thời gian

Nhận vào ngày bắt đầu và ngày kết thúc, và tùy chọn có bao gồm cuối tuần hay không. Nếu bao gồm cuối tuần, hàm sẽ trả về tất cả các ngày làm việc bao gồm cả cuối tuần (trong trường hợp đi làm bù); nếu không, nó chỉ trả về các ngày làm việc từ thứ Hai đến thứ Sáu.

```js
// Ví dụ sử dụng
const start = '2026-04-26';
const end = '2026-05-06';

// Lấy tất cả các ngày làm việc từ 2026-04-26 đến 2026-05-06, bao gồm cả cuối tuần (nếu có làm bù)
const workdaysIncludingWeekends = getWorkdaysInRange(start, end, true);
console.log('Ngày làm việc (bao gồm cuối tuần):', workdaysIncludingWeekends);

// Lấy danh sách ngày làm việc, không bao gồm cuối tuần
const workdaysExcludingWeekends = getWorkdaysInRange(start, end, false);
console.log('Ngày làm việc (không bao gồm cuối tuần):', workdaysExcludingWeekends);
```

## `findWorkday`: Tìm kiếm ngày làm việc

Tìm ngày làm việc thứ {deltaDays} tính từ ngày hôm nay hoặc một ngày cụ thể.

```js
// Tìm ngày làm việc thứ {deltaDays} tính từ hôm nay
// Nếu deltaDays là 0, đầu tiên kiểm tra ngày hiện tại có phải là ngày làm việc không. Nếu đúng, trả về ngày hiện tại.
// Nếu ngày hiện tại không phải ngày làm việc, nó sẽ tìm ngày làm việc tiếp theo.
const currentWorkday = findWorkday(0);
console.log(currentWorkday);

// Tìm ngày làm việc đầu tiên trong tương lai tính từ hôm nay
const nextWorkday = findWorkday(1);
console.log(nextWorkday);

// Tìm ngày làm việc gần nhất trong quá khứ tính từ hôm nay
const previousWorkday = findWorkday(-1);
console.log(previousWorkday);

// Có thể truyền tham số thứ hai để tìm ngày làm việc quanh một ngày cụ thể
// Tìm ngày làm việc thứ 2 tương lai tính từ 2026-05-18
const secondNextWorkday = findWorkday(2, '2026-05-18');
console.log(secondNextWorkday);
```

## `getDayDetail`: Lấy thông tin chi tiết về ngày

Hàm này dùng để kiểm tra một ngày có phải ngày làm việc không, trả về giá trị boolean và thông tin chi tiết.

1. Nếu là ngày làm việc bình thường, trả về true và tên thứ. Nếu là ngày đi làm bù, trả về true và chi tiết ngày lễ liên quan.
2. Nếu là ngày nghỉ lễ, trả về false và chi tiết ngày lễ.

```js
// Ví dụ sử dụng

// Ngày làm việc bình thường (thứ Sáu)
console.log(getDayDetail('2026-01-02')); // { "date": "2026-01-02", "work":true,"name":"Friday"}
// Ngày nghỉ cuối tuần (thứ Bảy)
console.log(getDayDetail('2026-01-03')); // { "date": "2026-01-03", "work":false,"name":"Saturday"}
// Ngày nghỉ Tết Dương lịch
console.log(getDayDetail('2026-01-01')); // { "date": "2026-01-01", "work":false,"name":"New Year's Day,Tết Dương lịch"}
```