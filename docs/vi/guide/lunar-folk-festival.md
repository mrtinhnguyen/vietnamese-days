# Lễ hội dân gian & Kỷ niệm Âm lịch

## Tra cứu lễ hội âm lịch theo khoảng thời gian dương lịch

```js
import { getLunarFestivals } from "vietnamese-days";

/**
 * Lấy lễ hội âm lịch (bao gồm lễ hội cố định và lễ hội tính toán đặc biệt)
 * @param [start] Ngày bắt đầu (mặc định là hôm nay)
 * @param [end] Ngày kết thúc (nếu không truyền sẽ chỉ tra cứu ngày bắt đầu)
 */
getLunarFestivals('2026-02-17'); // Tết Nguyên đán
getLunarFestivals('2026-02-17', '2026-02-20');
```

### Danh sách các Lễ hội dân gian & Kỷ niệm tiêu biểu

#### Tháng Giêng
- **Mùng Một**: Tết Nguyên đán
- **Rằm (15)**: Tết Nguyên tiêu (Rằm tháng Giêng)

#### Tháng Ba
- **Mùng Ba**: Tết Hàn thực
- **Mùng Mười**: Giỗ Tổ Hùng Vương

#### Tháng Tư
- **Mùng Tám**: Lễ Phật đản (theo truyền thống Bắc tông)
- **Rằm (15)**: Lễ Phật đản (Chính lễ / truyền thống Nam tông)

#### Tháng Năm
- **Mùng Năm**: Tết Đoan ngọ (Tết giết sâu bọ)

#### Tháng Bảy
- **Rằm (15)**: Lễ Vu Lan / Xá tội vong nhân (Rằm tháng Bảy)

#### Tháng Tám
- **Rằm (15)**: Tết Trung thu

#### Tháng Chín
- **Mùng Chín**: Tết Trùng cửu

#### Tháng Mười
- **Mùng Mười**: Tết Thường tân (Tết Cơm mới)
- **Rằm (15)**: Lễ hội Hạ nguyên (Rằm tháng Mười)

#### Tháng Chạp (12)
- **Ngày 23**: Tết Táo quân (Tiễn ông Công ông Táo về trời)
- **Đêm Giao thừa**: Trừ tịch

---
*Thông tin lễ hội được cập nhật dựa trên phong tục tập quán truyền thống của người Việt.*
