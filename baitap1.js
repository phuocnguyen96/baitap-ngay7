var soGioLam = document.querySelector("#so-gio-lam")
var soTienGio = document.querySelector("#so-tien-theo-gio")
var showKetQua = document.querySelector("#show-messenger")
var buttonSubmit = document.querySelector("#btn-submit")

function tinhluong(){
   var gioLam = Number(soGioLam.value)
   var tienGio = Number(soTienGio.value)
   var ketQua;

   if (gioLam > 40) {
    ketQua = ((gioLam-40) * (tienGio * 1.5)) + ( gioLam * tienGio)
   } else {
    ketQua = gioLam * tienGio
   }

   showKetQua.value = ("Tiền lương tháng này là " + ketQua + " nghìn đồng")

   event. preventDefault();
}

buttonSubmit.addEventListener("click", tinhluong)


