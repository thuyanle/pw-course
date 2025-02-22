# Git
## Xem lịch sử commit: git log
## Thay đổi commit message:
### Cách1
git commit --amend -m"message"
### Cách2
- git commit --amend
- Gõ i : vào chế độ insert
- Sửa message 
- Gõ esc để thoát insert
- Gõ :wq để write and quite
## Đưa từ staging về working directory
git restore --stage <file_name>
## Đưa từ repository về working directory
- Đưa commit cuối cùng về working directory
git reset HEAD~1
- Đưa commit thứ 2 tính từ cuối cùng về working directory
git reset HEAD~2
## Branch model
### Tạo branch
- Tính từ branch đang đứng, tạo branch: git branch "ten_branch"
- Di chuyển sang nhánh: git checkout "ten_branch"
- Vừa tạo và di chuyển sang nhánh: git checkout -b "ten_nhanh"
## .gitignore
- Tạo file .gitignore để chứa các file/ folder không cần git theo dõi
- Điền file trong .gitignore: filename.fileformat
- Điền folder trong .gitignore: folder/

# Javascript
## Code convention
- kebab-case: ten file
- camelCase: ten bien
- Pascal Case: ten class
## Formated console log
- Format: console.log(`${variable_name}`);
- E.x:console.log(`Toi la ${variable_name}`);
## Object
### Định nghĩa
Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số
### Khai báo
- let/const <ten_object>={
    <thuoc_tinh_1>: <gia_tri_1>,
    ...}
- Thêm thuộc tính cho object
object.thuocTinh= "gia tri";  
hoặc  
object["thuoc_tinh"]="gia_tri";
- console.log("ten_object"){"thuoc_tinh_1":"gia_tri_1", "thuoc_tinh_2":"gia_tri_2"};
- Xóa thuộc tính của object  
delete object.attribute

### NOTE
Không thể thay đổi giá trị const nhưng có thể thay đổi thuộc tính của một const là object
const student ={"name":"an","age":20};
student.name = "an.le";
## Logical operator
- && : cả 2 vế của mệnh đề đều
đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của
mệnh đề
## Array
### Tạo mảng
### Truy xuất mảng
- Độ dài mảng: length
- Lấy phần tử theo index [0],[1],[2]
### Thêm phần tử vào mảng
const arr = [1,2];  
arr.push(3);  
console.log (arr);  
//Kết quả in ra [1,2,3]
## Function
### Định nghĩa
Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
### Khai báo
function <ten_ham>(){//code}
