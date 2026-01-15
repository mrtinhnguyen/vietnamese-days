# Ngày lễ Việt Nam

## Giới thiệu

Dự án này cung cấp một loạt các hàm để tra cứu ngày lễ Việt Nam, ngày nghỉ bù, ngày làm việc, 24 tiết khí, cũng như chuyển đổi giữa âm lịch và dương lịch. Ngoài ra, nó còn hỗ trợ đăng ký ngày lễ qua file `iCal`, có thể sử dụng cho các ứng dụng như Google Calendar, Apple Calendar, Microsoft Outlook, v.v.

`Github Action` được thực thi định kỳ hàng ngày để tự động lấy dữ liệu. Khi có thay đổi về ngày lễ, thông tin sẽ được cập nhật theo các thông báo chính thức từ Chính phủ.

+ **Ngày lễ**: Hỗ trợ từ năm 2004 đến 2026.
+ **24 Tiết khí**: Hỗ trợ từ năm 1900 đến 2100.
+ **Âm lịch**: Hỗ trợ từ năm 1900 đến 2100.

Dự án chủ yếu dành cho người dùng `JS` hoặc `TS`, cách sử dụng có thể xem trong các tài liệu tiếp theo.

## Các ngôn ngữ khác

Nếu bạn không sử dụng `JS` hoặc `TS`, dự án này cung cấp file [vietnamese-days.json](https://cdn.jsdelivr.net/npm/vietnamese-days/dist/vietnamese-days.json) về ngày lễ Việt Nam, có thể sử dụng qua link CDN dưới đây.

```
https://cdn.jsdelivr.net/npm/vietnamese-days/dist/vietnamese-days.json
```

Nếu bạn cần file `json` cho từng năm riêng biệt, bạn có thể sử dụng liên kết sau, hỗ trợ từ năm 2004 trở đi.

```
https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/{year}.json

<!-- File json ngày lễ Việt Nam năm 2025 -->
https://cdn.jsdelivr.net/npm/vietnamese-days/dist/years/2025.json
```

## Thông tin giấy phép

Dự án được phát hành theo giấy phép MIT.