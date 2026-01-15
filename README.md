# Vietnamese Days (Ngày lễ Việt Nam)

[![NPM Version](https://img.shields.io/npm/v/vietnamese-days)](https://www.npmjs.com/package/vietnamese-days)
[![GitHub License](https://img.shields.io/github/license/mrtinhnguyen/vietnamese-days)](https://github.com/mrtinhnguyen/vietnamese-days/blob/main/LICENSE)
[![README](https://img.shields.io/badge/README-English-brightgreen.svg)](https://github.com/mrtinhnguyen/vietnamese-days/blob/main/README.en.md)

Dự án này cung cấp một loạt các hàm dùng để tra cứu ngày lễ Việt Nam, ngày nghỉ bù, ngày làm việc, 24 tiết khí, cũng như chuyển đổi giữa âm lịch và dương lịch. Ngoài ra, nó còn cung cấp file `JSON` và hỗ trợ đăng ký ngày lễ qua file `iCal`, có thể sử dụng cho các ứng dụng như Google Calendar, Apple Calendar, Microsoft Outlook, v.v.

## Tự động hóa

Đã tích hợp AI để tự động cập nhật dữ liệu ngày lễ. Khi có thay đổi về ngày lễ, hệ thống sẽ tự động tạo PR và gửi email nhắc nhở kiểm duyệt.

## Tài liệu

Để xem tài liệu chi tiết, vui lòng truy cập [vietnamese-days.tonyx.dev](https://vietnamese-days.tonyx.dev/).

`Action` được thực thi hàng ngày để tự động lấy dữ liệu. Thông tin cập nhật theo các quy định chính thức của Chính phủ Việt Nam.

- **Ngày lễ**: Hỗ trợ từ năm 2004 đến 2026.
- **24 Tiết khí**: Hỗ trợ từ năm 1900 đến 2100.
- **Âm lịch**: Hỗ trợ từ năm 1900 đến 2100.

## Ngôn ngữ khác

Nếu bạn không sử dụng `JS` hoặc `TS`, dự án cung cấp file `JSON` về ngày lễ Việt Nam. Bạn có thể trích dẫn trực tiếp qua liên kết [vietnamese-days.json](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/vietnamese-days.json). Nếu cần file `JSON` cho từng năm riêng biệt, bạn cũng có thể sử dụng liên kết [years/2026.json](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.json), hỗ trợ từ năm 2004 trở đi.

Ví dụ sử dụng trong `Java`, bạn có thể tham khảo [Warnier-zhang/java-chinese-days](https://github.com/Warnier-zhang/java-chinese-days) (chỉ dành cho tra cứu ngày lễ và ngày làm việc).

## Đăng ký lịch (iCal)

Trong các ứng dụng như Google Calendar, Apple Calendar, Microsoft Outlook, bạn có thể thiết lập địa chỉ đăng ký: [https://cdn.jsdelivr.net/npm/vietnamese-days/dist/holidays.ics](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/holidays.ics) để nhận thông tin lịch.

Bản tiếng Anh: [https://cdn.jsdelivr.net/npm/vietnamese-days/dist/holidays.en.ics](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/holidays.en.ics)

Lịch đăng ký bao gồm các ngày lễ và ngày nghỉ bù trong 3 năm gần nhất.

Nếu cần file `ics` cho từng năm riêng biệt, bạn có thể sử dụng liên kết [https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.ics](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.ics), bản tiếng Anh là [https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.en.ics](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2026.en.ics), hỗ trợ từ năm 2004 trở đi.

## Hướng dẫn đóng góp

1. Fork + Clone dự án về máy của bạn;
2. Ngày lễ: Chỉnh sửa tại [Định nghĩa ngày lễ](https://github.com/mrtinhnguyen/vietnamese-days/blob/main/src/holidays/generate.ts);
3. Định nghĩa Âm lịch: Chỉnh sửa tại [Hằng số Âm lịch](https://github.com/mrtinhnguyen/vietnamese-days/blob/main/src/solar_lunar/constants.ts);
4. Các sửa đổi khác...;
5. Tạo Pull Request (PR).

## Lời cảm ơn

1. Dữ liệu Âm lịch dựa trên dự án [Bigkoo/Android-PickerView](https://github.com/Bigkoo/Android-PickerView).
2. Tham khảo cách tạo dữ liệu ngày lễ từ dự án `Python` [LKI/chinese-calendar](https://github.com/LKI/chinese-calendar).
3. Việt hóa và cập nhật dữ liệu ngày lễ Việt Nam bởi [TonyX.Dev](https://github.com/mrtinhnguyen).
