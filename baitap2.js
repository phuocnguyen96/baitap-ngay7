var tenSp = callelementID("#ten-sp")
var soLuongSp = callelementID("#soluong-sp")
var giaTienSp = callelementID("#gia-sp")
var showKetQua = callelementID("#show-messenger")
var btnSubmit = callelementID("#btn-submit")
var buttonNextPage = callelementID("#next-page")
var buttonPreviousPage = callelementID("#previous-page")
var ketQua;

btnSubmit.addEventListener("click", tinhtiensp)
buttonNextPage.addEventListener("click", nextpage)
buttonPreviousPage.addEventListener("click", luipage)

function tinhtiensp(){
    var soLuong = Number(soLuongSp.value)
    var giaTien = Number(giaTienSp.value)
    var thoaDieuKien = kiemtra(soLuong,giaTien)
    var giamGiaMot = 0.92 // Giam gia 8%
    var giamGiaHai = 0.88 // Giam gia 12%
    
    
    if(thoaDieuKien){
        if (soLuong > 100) {
            ketQua = (((soLuong - 100) * giaTien) * giamGiaHai) + (100 * giaTien)
        } else if (50 < soLuong) {
            ketQua = (((soLuong - 50) * giaTien) * giamGiaMot) + (49 * giaTien)
            console.log("ket qua", ketQua)
        } else {
            ketQua = soLuong * giaTien
        }
    } else {
        alert("vui lòng kiểm tra lại thông tin")
    }

    showKetQua.value = ("Giá của " + soLuong + " sp" + tenSp.value + " là : " + ketQua + " đồng")

    event. preventDefault();
}

function callelementID(elements){
    var domElements = document.querySelector(elements)
    return domElements
}

function kiemtra(soLuongSp,giaTienSp){
    var ketQuaReturn;
 
    if(soLuongSp && giaTienSp) {
       ketQuaReturn = true
    } else {
       ketQuaReturn = false
    }
    return ketQuaReturn;
 }

 function nextpage() {
    window.location.href = 'index3.html';
 }

 function luipage() {
    window.location.href = 'index.html';
 }
