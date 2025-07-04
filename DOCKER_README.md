# Hotel Booking System - Docker Deployment

## Cách chạy ứng dụng

### Yêu cầu hệ thống
- Docker
- Docker Compose

### Chạy ứng dụng
```bash
# Clone repository và vào thư mục dự án
cd /workspaces/hotel-booking-system

# Chạy toàn bộ ứng dụng (MySQL, Backend, Frontend)
docker-compose up --build
```

### Truy cập ứng dụng
- **Frontend**: http://localhost (port 80)
- **Backend API**: http://localhost:8080
- **MySQL Database**: localhost:3306

### Thông tin đăng nhập
- **Username**: username
- **Password**: password

### Cấu trúc services
1. **MySQL Database** (mysql:8.0)
   - Port: 3306
   - Database: hotel_booking
   - Username: root
   - Password: rootpassword

2. **Spring Boot Backend**
   - Port: 8080
   - JPA tự động tạo bảng (hibernate.ddl-auto=create-drop)
   - Import dữ liệu mẫu từ data.sql

3. **React Frontend**
   - Port: 80 (Nginx)
   - Proxy API calls tới backend thông qua /api/*

### Dừng ứng dụng
```bash
docker-compose down
```

### Dừng và xóa volumes
```bash
docker-compose down -v
```

## Thay đổi chính

### Database
- Chuyển từ H2 in-memory sang MySQL 8.0
- JPA tự động tạo bảng khi khởi động
- Dữ liệu mẫu được import từ data.sql

### Backend
- Cấu hình CORS để frontend có thể kết nối
- Multi-stage Docker build để tối ưu kích thước image
- Health check cho MySQL trước khi khởi động backend

### Frontend  
- Sử dụng Nginx làm web server
- Proxy API calls tới backend
- Build production với Docker multi-stage
