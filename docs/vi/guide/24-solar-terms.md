# Mô-đun Tiết khí

Hai mươi tư tiết khí là một hệ thống lịch nông nghiệp truyền thống, đánh dấu các **khoảng thời gian** khác nhau trong năm. Mỗi tiết khí thường có một ngày bắt đầu cụ thể, nhưng ngày này không đại diện cho toàn bộ thời gian của tiết khí đó. Trên thực tế, mỗi tiết khí kéo dài khoảng 15 ngày.

Lấy ví dụ về "Tiểu mãn", nó thường bắt đầu vào khoảng ngày 20 tháng 5 dương lịch, nhưng không kết thúc vào ngày đó mà kéo dài cho đến khi tiết khí tiếp theo bắt đầu. Cụ thể, Tiểu mãn kéo dài đến khoảng ngày 5 tháng 6 (Mang chủng). Do đó, khoảng thời gian của tiết khí "Tiểu mãn" là từ khoảng ngày 20 tháng 5 đến khoảng ngày 5 tháng 6.

## Lấy ngày của 24 tiết khí

### Lấy mảng các ngày tiết khí trong một khoảng thời gian

```js
import { getSolarTermsInRange } from "vietnamese-days";

// Không truyền tham số, tra cứu ngày hiện tại
console.log(getSolarTermsInRange())
// [{date: '2026-05-29', term: 'lesser_fullness_of_grain', name: 'Tiểu mãn', index: 10}]
// index: đại diện cho ngày thứ mấy trong tiết khí hiện tại, bắt đầu từ 1

// Không truyền end, tra cứu một ngày cụ thể
console.log(getSolarTermsInRange('2026-05-01'))
// [{date: '2026-05-01', term: 'grain_rain', name: 'Cốc vũ', index: 13}]

// Tra cứu các tiết khí trong một khoảng thời gian
console.log(getSolarTermsInRange('2026-05-01', '2026-05-06'))
/**
 * =>
 * [
 *   {"date":"2026-05-01","term":"grain_rain","name":"Cốc vũ","index":13},
 *   {"date":"2026-05-02","term":"grain_rain","name":"Cốc vũ","index":14},
 *   {"date":"2026-05-03","term":"grain_rain","name":"Cốc vũ","index":15},
 *   {"date":"2026-05-04","term":"grain_rain","name":"Cốc vũ","index":16},
 *   {"date":"2026-05-05","term":"the_beginning_of_summer","name":"Lập hạ","index":1},
 *   {"date":"2026-05-06","term":"the_beginning_of_summer","name":"Lập hạ","index":2}
 * ]
 **/
```

### Nếu bạn chỉ muốn lấy mảng **ngày bắt đầu** của tiết khí

```js
import { getSolarTerms } from "vietnamese-days";

/** Lấy mảng các ngày bắt đầu của tiết khí trong một khoảng thời gian */
const solarTerms = getSolarTerms("2026-05-01", "2026-05-20");
solarTerms.forEach(({ date, term, name }) => {
  console.log(`${name}: ${date}, ${term}`);
});
// Lập hạ: 2026-05-05, the_beginning_of_summer
// Tiểu mãn: 2026-05-20, lesser_fullness_of_grain

// Nếu không có tiết khí nào bắt đầu trong khoảng đó, trả về []
getSolarTerms("2026-05-21", "2026-05-25");
// return []

/* Không truyền tham số end, lấy tiết khí của một ngày cụ thể */
getSolarTerms("2026-05-20");
// return: [{date: '2026-05-20', term: 'lesser_fullness_of_grain', name: 'Tiểu mãn'}]
```