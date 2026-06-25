# Cấu trúc thư mục dự án Aqua Care (Flat Structure)

Mục tiêu của cấu trúc này là để tối ưu hóa mã nguồn, giúp tải trang nhanh hơn, dễ quản lý tệp tin và chuẩn bị đăng tải trực tiếp lên GitHub Pages làm sản phẩm môn học của sinh viên Thương mại điện tử.

## 1. Các tệp giao diện chính (Root)
Các tệp HTML được đặt trực tiếp ở thư mục gốc để máy chủ web và GitHub Pages có thể nhận diện và truy cập trực tiếp:
- `index.html`: Trang chủ chính của website Aqua Care.
- `san-pham.html`: Trang trưng bày sản phẩm (lọc, thức ăn, vi sinh, vật liệu, v.v.).
- `kien-thuc.html`: Trang tổng hợp cẩm nang chăm sóc cá cảnh, hồ thủy sinh.
- `du-an.html`: Trang tổng hợp các dự án hồ cá và công trình thi công.
- `lien-he.html`: Trang điền form liên hệ tư vấn và bản đồ cửa hàng.
- `bo-suu-tap.html`: Trang thư viện hình ảnh các mẫu hồ đẹp truyền cảm hứng.
- `hinh-anh-khach-hang.html`: Trang phản hồi trực quan từ khách hàng thực tế.
- `trang chủ.html`: Bản sao lưu giao diện trang chủ trong quá trình phát triển.

## 2. Thư mục mã nguồn chính
- `/css/`: Chứa các tệp định dạng giao diện.
  - `style.css`: Quy tắc CSS dùng chung (font chữ, biến màu sắc, thanh điều hướng, chân trang).
  - `css/pages/`: Chứa các tệp CSS riêng biệt cho từng trang để tối ưu tốc độ tải (như `index.css`, `san-pham.css`, `kien-thuc.css`, `lien-he.css`, `du-an.css`, `gallery.css`).
- `/js/`: Chứa mã xử lý logic JavaScript.
  - `main.js`: Mã JavaScript dùng chung (giỏ hàng, hiệu ứng thanh điều hướng).
  - `js/pages/`: Chứa mã xử lý logic riêng biệt cho từng trang (như dữ liệu sản phẩm, bộ lọc dự án, tìm kiếm kiến thức, xác thực form liên hệ).

## 3. Thư mục tài nguyên đa phương tiện
- `/assets/images/`: Toàn bộ hình ảnh và logo của dự án.
  - `backgrounds/`: Các ảnh nền lớn cho phần đầu trang (Hero) và các phần nội dung khác.
  - `branding/`: Các tệp logo chính thức của Aqua Care (logo tối màu, logo sáng màu).
  - `categories/`: Ảnh nhỏ đại diện cho các danh mục sản phẩm.
  - `content/`: Các ảnh minh họa nội dung chung.
  - `galleries/`: Ảnh các bộ sưu tập hồ cá và phản hồi khách hàng.
  - `knowledge/`: Ảnh bìa độc nhất cho từng bài viết trong phần cẩm nang kiến thức.
  - `products/`: Ảnh sản phẩm được phân loại theo danh mục cụ thể (`thuc-an/`, `thuoc-vi-sinh/`, `vat-lieu-loc/`, `thiet-bi/`).
  - `projects/`: Ảnh chụp các dự án thực tế của khách hàng.

## 4. Nguyên tắc chỉnh sửa mã nguồn cho sinh viên
- Khi tạo ảnh nền mới: đặt vào thư mục `/assets/images/backgrounds/`.
- Khi viết mã CSS mới: nếu viết riêng cho trang nào thì để vào `/css/pages/`, nếu dùng chung thì cập nhật vào `css/style.css`.
- Khi đặt tên tệp: luôn dùng chữ thường không dấu, phân cách bằng dấu gạch ngang (ví dụ: `vi-sinh-lam-sach-nuoc.jpg`).
