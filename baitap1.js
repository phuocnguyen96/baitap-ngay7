var soGioLam = callelement("#so-gio-lam")
var soTienGio = callelement("#so-tien-theo-gio")
var showKetQua = callelement("#show-messenger")
var buttonSubmit = callelement("#btn-submit")
var buttonNextPage = callelement("#next-page")
var ketQua;

console.log("button next page ", buttonNextPage)

buttonSubmit.addEventListener("click", tinhluong)
buttonNextPage.addEventListener("click", nextpage)

function callelement(param1){
   var domElement = document.querySelector(param1)
   return domElement
}

function kiemtra(soGio,soTien){
   var ketQuaReturn;

   if(soGio && soTien) {
      ketQuaReturn = true
   } else {
      ketQuaReturn = false
   }
   return ketQuaReturn;
}

function tinhluong() {
   var gioLam = Number(soGioLam.value);
   var tienGio = Number(soTienGio.value);
   var thoaDieuKien = kiemtra(gioLam,tienGio);
   var ketQua;

   if(thoaDieuKien) {
      if (gioLam > 40) {
         ketQua = ((gioLam-40) * (tienGio * 1.5)) + ( gioLam * tienGio)
        } else {
         ketQua = gioLam * tienGio
        }
        showKetQua.value = ("Tiền lương tháng này là " + ketQua + " nghìn đồng")
        event. preventDefault();
   } else {
      alert("Vui lòng nhập đầy đủ thông tin");
   }
}

function nextpage() {
   window.location.href = 'index2.html';
}