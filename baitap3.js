var hoVaTen = callelementID("#ten-hs")
var diemToan = callelementID("#diem-toan")
var diemLy = callelementID("#diem-ly")
var diemHoa = callelementID("#diem-hoa")
var showKetQua = callelementID("#show-messenger")
var btnSubmit = callelementID("#btn-submit")
var buttonPreviousPage = callelementID("#previous-page")
var ketQua;

btnSubmit.addEventListener("click", tinhdiem)
buttonPreviousPage.addEventListener("click", luipage)

function callelementID(param1){
    var domElements = document.querySelector(param1)
    return domElements
}

function tinhdiem(){
    var soDiemToan = Number(diemToan.value)
    var soDiemLy = Number(diemLy.value)
    var soDiemHoa = Number(diemHoa.value)
    var thoaDieuKien = kiemtra(soDiemToan,soDiemLy,soDiemHoa)
    var diemTongKet = (soDiemToan + soDiemLy + soDiemHoa) / 3
    ketQua = Number(diemTongKet.toFixed(1))

    console.log("thoaDieuKien ", thoaDieuKien)

    if(thoaDieuKien){
        if(ketQua >= 8.5){
            showKetQua.value = ("Em " + hoVaTen.value + " Đạt học sinh Giỏi")
        } else if(ketQua<8.5 && ketQua >= 6.5){
            showKetQua.value = ("Em " + hoVaTen.value + " Đạt học sinh khá")
        } else if(ketQua>=5 && ketQua<6.5) {
            showKetQua.value = ("Em " + hoVaTen.value + " Đạt học sinh trung bình")
        } else {
            showKetQua.value = ("Em " + hoVaTen.value + " Đạt học sinh yếu")
        }
    } else {
        alert("Vui lòng kiểm tra lại thông tin");
    }
    event. preventDefault();
}

function kiemtra(checkToan,checkLy,checkHoa){
    var ketQuaReturn;

    if(!checkToan || !checkLy || !checkHoa){
        ketQuaReturn = false;
    } else {
        ketQuaReturn = true;
    }
    return ketQuaReturn;
}

function luipage() {
    window.location.href = 'index2.html';
 }