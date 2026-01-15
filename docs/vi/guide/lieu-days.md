# Ngày nghỉ bù

## `isInLieu`: Kiểm tra một ngày có phải là ngày nghỉ bù/đi làm bù (in lieu day) hay không

Trong sắp xếp ngày lễ tại Việt Nam, các ngày bù được điều chỉnh để tạo ra kỳ nghỉ kéo dài hoặc đi làm bù cho một ngày nghỉ. Ví dụ, khi một ngày lễ rơi vào cuối tuần, có thể có ngày nghỉ bù vào thứ Hai kế tiếp để kéo dài kỳ nghỉ.

```js
// Kiểm tra 2026-02-23 (đi làm bù sau Tết), trả về `true` nghĩa là một ngày bù.
console.log(isInLieu('2026-02-23')); // true

// Kiểm tra 2026-02-17 (Mùng 1 Tết), trả về `false` vì nó là ngày lễ chính thức, không phải ngày bù.
console.log(isInLieu('2026-02-17')); // false
```