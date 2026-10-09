# Customer Feedback – Zod Validation

Ứng dụng Form Góp ý khách hàng được xây dựng bằng Next.js và TypeScript, sử dụng Zod để kiểm tra dữ liệu đầu vào.

## Công nghệ sử dụng

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Zod

## Chức năng

- Nhập nội dung góp ý và số điện thoại.
- Kiểm tra nội dung phải có trên 20 ký tự.
- Kiểm tra số điện thoại di động Việt Nam gồm 10 chữ số, bắt đầu bằng 03, 05, 07, 08 hoặc 09.
- Hiển thị thông báo lỗi khi dữ liệu không hợp lệ.
- Hiển thị thông báo thành công khi dữ liệu hợp lệ.

## Cài đặt và chạy

```bash
npm install
npm run dev
```

Truy cập: http://localhost:3000

## Kiểm thử

| Trường hợp | Kết quả |
|---|---|
| Nội dung dưới 21 ký tự | Hiển thị lỗi |
| Số điện thoại sai định dạng | Hiển thị lỗi |
| Cả hai trường hợp lệ | Thông báo kiểm tra thành công |

## Lưu ý

Ứng dụng chỉ thực hiện validation phía client, chưa lưu dữ liệu vào database hoặc gửi lên server.