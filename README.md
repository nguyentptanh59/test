# 🚀 Test Project

Dự án mẫu khởi đầu ứng dụng web tĩnh với quy trình Git & GitHub hoàn chỉnh.

## 🌟 Tính Năng
- 🎨 **Giao diện hiện đại**: Hỗ trợ chuyển đổi Dark / Light mode linh hoạt.
- ⚡ **Tương tác**: Bộ đếm click và nút sao chép nhanh URL repository.
- 📦 **Cấu trúc chuẩn**: Tích hợp sẵn `.gitignore` để quản lý mã nguồn gọn gàng.
- 🚀 **GitHub Pages Ready**: Sẵn sàng hiển thị trực tuyến.

## 🛠️ Cấu Trúc Thư Mục
```text
test/
├── .git/            # Dữ liệu quản lý phiên bản Git
├── .gitignore       # Danh sách loại trừ tệp/thư mục rác
├── index.html       # Trang chính của ứng dụng
├── style.css        # Định dạng giao diện & Dark/Light mode
├── app.js           # Xử lý logic tương tác người dùng
└── README.md        # Tài liệu hướng dẫn dự án
```

## 💻 Cách Chạy Cục Bộ (Local)
1. Clone dự án về máy:
   ```bash
   git clone https://github.com/nguyentptanh59/test.git
   ```
2. Mở file `index.html` trực tiếp trên trình duyệt hoặc sử dụng Live Server trong VS Code.

## 🌿 Quy Trình Làm Việc Với Git (Git Workflow)
- **Tạo nhánh tính năng mới:**
  ```bash
  git checkout -b feature/<ten-tinh-nang>
  ```
- **Lưu các thay đổi:**
  ```bash
  git add .
  git commit -m "feat: mô tả tính năng"
  ```
- **Đẩy lên GitHub:**
  ```bash
  git push -u origin feature/<ten-tinh-nang>
  ```
