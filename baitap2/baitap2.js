var tenSp = document.querySelector("#ten-sp")
var soLuongSp = document.querySelector("#soluong-sp")
var giaTienSp = document.querySelector("#gia-sp")
var showKetQua = document.querySelector("#show-messenger")
var btnSubmit = document.querySelector("#btn-submit")
var ketQua;

function tinhtiensp(event){
    var soLuong = Number(soLuongSp.value)
    var giaTien = Number(giaTienSp.value)

    console.log("soLuong la", soLuong)
    if (soLuong > 100) {
        ketQua = (((soLuong - 100) * giaTien) * 0.88) + (100 * giaTien)
    } else if (50 < soLuong) {
        ketQua = (soLuong * giaTien) * 0.92
        console.log("ket qua", ketQua)
    } else {
        ketQua = soLuong * giaTien
    }

    showKetQua.value = ("Giá của " + soLuong + " sp" + tenSp.value + " là : " + ketQua + " nghìn đồng")

    event. preventDefault();
}

btnSubmit.addEventListener("click", tinhtiensp)

