var mang = [];
var stt = 0;
var sum = 0;
var sl = 0;
var countCart=0;
var ktra=0;
var cart = localStorage.getItem("mang");
var giohang = JSON.parse(cart);
function themsanpham(ten, anh, tien) {
  let count = 0;
  for (sanpham of mang) {
    if (sanpham.name === ten) count = 1;
  }
  if (count === 1) {
    sanpham.soluong++;
    sum += parseInt(tien);
    countCart++;
  } else {
    sanpham = { name: ten, image: anh, soluong: 1, price: tien };
    mang.push(sanpham);
    row = bangdulieu.insertRow();
    cell0 = row.insertCell(0);
    cell0.innerHTML =   ++stt ;
    cell1 = row.insertCell(1);
    cell1.innerHTML =
        "<img src='../IMAGES/" + sanpham.image + "' width=50% />" ;
    cell2 = row.insertCell(2);
    cell2.innerHTML =   sanpham.name ;
    cell3 = row.insertCell(3);
    cell3.innerHTML = sanpham.soluong  ;
    cell4 = row.insertCell(4);
    cell4.innerHTML =   sanpham.price ;
    cell5 = row.insertCell(5);
    cell5.innerHTML =  sanpham.price ;
    cell6 = row.insertCell(6);
    cell6.innerHTML =  `<td><div onclick='deleteId(${stt})' class='btn btn-danger '>Xoá</div></td>` ;
    countCart++;
    sum = parseInt(sum) + parseInt(sanpham.price) * parseInt(sanpham.soluong);
  }
  localStorage.setItem("mang", JSON.stringify(mang));
}
slsp = document.getElementById("slsp");
tong = document.getElementById("tong");
bangdulieu = document.getElementById("bangdulieu");



function load() {
  var cart = localStorage.getItem("mang");
  var giohang = JSON.parse(cart);
  for (sanpham of giohang) {
    cell0.innerHTML = stt;
    cell1.innerHTML = "<img src='../IMAGES/" + sanpham.image + "' width=50%>";
    cell2.innerHTML = sanpham.name;
    cell3.innerHTML = sanpham.soluong  ;
    cell4.innerHTML = sanpham.price +"đ";
    cell5.innerHTML = "<td class='text-right'>"+ parseInt(sanpham.price) * parseInt(sanpham.soluong)+"đ</td>";
    cell6.innerHTML =  `<td><div onclick='deleteId(${stt})' class='btn btn-danger'>Xoá</div></td>` ;
  }
  slsp.innerHTML = countCart;
  tong.innerHTML = sum + " đ";
};

function showCart(){
  var cart = localStorage.getItem("mang");
  var giohang = JSON.parse(cart);
  
  for(sanpham of giohang){
    row = bangdulieu.insertRow();
      cell0 = row.insertCell(0);
      cell0.innerHTML =   ++stt ;
      cell1 = row.insertCell(1);
      cell1.innerHTML =
          "<img src='../IMAGES/" + sanpham.image + "' width=50% />" ;
      cell2 = row.insertCell(2);
      cell2.innerHTML =   sanpham.name ;
      cell3 = row.insertCell(3);
      cell3.innerHTML = sanpham.soluong  ;
      cell4 = row.insertCell(4);
      cell4.innerHTML =   sanpham.price ;
      cell5 = row.insertCell(5);
      cell5.innerHTML =  sanpham.price ;
      cell6 = row.insertCell(6);
      cell6.innerHTML =  `<td><div onclick='deleteId(${stt})' class='btn btn-danger'>Xoá</div></td>` ;
      countCart++;
      sum = parseInt(sum) + parseInt(sanpham.price) * parseInt(sanpham.soluong);
  }
  
}

function deleteAll() {
  localStorage.clear();
  location.reload();
  
};
function deleteId(user_id) {
  console.log(user_id)
  cart=localStorage.getItem("mang");
  var giohang = JSON.parse(cart);
  var mang2=[];
  for(i in giohang){
    if(i!=(parseInt(user_id)-1)){
      mang2.push(giohang[i]);
    }
  }
  localStorage.removeItem("mang");
  localStorage.setItem("mang", JSON.stringify(mang2));
  location.reload();
}

var userlist=[];
function thanhtoan(){
  const ten= document.getElementById("name1").value;
  const email= document.getElementById("email1").value;
  const diachi= document.getElementById("diachi1").value;
  var user= {
    name:ten,
    email:email,
    address:diachi
  }
  userlist.push(user);
  localStorage.setItem("user", JSON.stringify(userlist))
  window.location.assign("../HTML/TRANG_CHU.htm");
  alert("Thanh toán thành công");
  localStorage.removeItem("mang");
    
}


var f = document.getElementById("fdangky");
var strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

function kiemtra() {
  kq = true;

  if (f.tendn.value.length == 0) {
    document.getElementById("text1").innerHTML =
      "*Tên đăng nhập không được rỗng";
    kq = false;
  } else document.getElementById("text1").innerText = "Tên đăng nhập đúng";

  if (strongRegex.test(f.matkhau.value) == false) {
    document.getElementById("text2").innerHTML =
      "*Mật khẩu của bạn phải bao gồm: Chữ hoa, thường, số và ký tự";
    kq = false;
  } else document.getElementById("text2").innerText = "Mật khẩu đúng";

  if (f.nhaplaimk.value != f.matkhau.value) {
    document.getElementById("text3").innerHTML =
      "*Mật khẩu của bạn không trùng khớp";
    kq = false;
  } else document.getElementById("text3").innerText = "";

  if (kq) {
    return true;
  } else return false;
}
