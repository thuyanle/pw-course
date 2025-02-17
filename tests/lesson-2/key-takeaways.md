# Version Control System
### Phân biệt 3 types của VCS
* Local
* Centralize
* Distributed
# Git
## Git & Github
## Git - 3 working areas
- Working directory
- Staging
- Repository
##  Git - key takeaways
### Khởi tạo thư mục quản lý bởi Git: git init
### Cấu hình git cho thư mục: 
- Git config user.name "name" 
- Git config user.email "mail"
### Thêm file vào vùng staging
- Thêm 1 file: git add filename.format
- Thêm toàn bộ file: git add .
### Xem trạng thái file: git status
- Trước khi chạy câu lệnh add vào staging: màu đỏ
- Sau khi chạy câu lệnh add vào staging: màu xanh
### Commit
git commit -m "message"
### Kiểm tra lịch sử commit
git log
### Push lên Github
git push origin main
## Git commit convention: <commit_type>: < description>
### Commit type:
- chore: sửa nhỏ lẻ
- feat: thêm mới
- fix: sửa lỗi
### Description
Mô tả về commit: max 50  kí tự
# Javascript

## Javascript
- Javascript chạy trên browser được browser engine support
- Javascript chạy trên máy tính cần Node JS
## Variable
- var: phạm vi toàn cục (global)
- let: phạm vi trong ngoặc {}
- Nên dùng let. dễ kiểm soát

## Constant
- const: không thể gán lại giá trị khác
## Data types
- string
- number
- boolean

## Comparison operator
- So sánh hơn kém: ><>
- So sánh bằng: ==, ===, !=, !==, >=, <=
## Unary operator
- i++ >>> i=i+1
- i-- >>> i =i-1
## Arithmetic operator: + - * /
## Conditional
if (condition){//code}
else {//code};
## Loops
for (i=1; i<100; i++>){//code}
## NOTE: Format code : Window: Alt Shift F