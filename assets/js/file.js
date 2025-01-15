$(document).ready(function() {
    var i = 1;
    $("#myBtn").on("click", function() {
        $("#myModal").modal();
    });

    var txtTen = $("#txtTen");
    var tbTen = $("#tbTen");

    function KiemtraTen() {
        var re = /^([A-Z][a-z]*)(\s[A-Z][a-z]*)*$/;
        if (txtTen.val() == "") {
            tbTen.html("* Họ tên không được để trống");
            return false;
        }

        if (!re.test(txtTen.val())) {
            tbTen.html("* Chữ cái đầu viết hoa hoặc bắt đầu bằng chữ cái");
            return false;
        }
        tbTen.html("*");
        return true;
    }
    txtTen.blur(KiemtraTen);


    var txtTaikhoan = $("#txtTaikhoan");
    var tbTaikhoan = $("#tbTaikhoan");

    function KiemtraTaikhoan() {
        var ra = /^([a-zA-Z]{6,})$/;
        if (txtTaikhoan.val() == "") {
            tbTaikhoan.html("* Tài khoản không được để trống");
            return false;
        }
        if (!ra.test(txtTen.val())) {
            tbTen.html("* Tài khoản phải bắt đầu bằng chữ cái");
            return false;
        }
        tbTaikhoan.html("*");
        return true;
    }
    txtTaikhoan.blur(KiemtraTaikhoan);

    var txtMk = $("#txtMk");
    var tbMk = $("#tbMk");

    function KiemtraMk() {
        var ru = /(?=.*\d).{6,}/;
        if (txtMk.val() == "") {
            tbMk.html("* Mật khẩu không được để trống");
            return false;
        }
        if (!ru.test(txtMk.val())) {
            tbMk.html("* Mật khẩu phải trên 6 kí tự");
            return false;
        }
        tbMk.html("*");
        return true;
    }
    txtMk.blur(KiemtraMk);

    var txtE = $("#txtE");
    var tbE = $("#tbE");

    function KiemtraE() {
        var rj = /^([a-zA-Z0-9]+[\!\@\#\.]{1}\@+(iuh|gmail|yahoo)+\.com)$/;
        if (txtE.val() == "") {
            tbE.html("* Email không được để trống");
            return false;
        }
        if (!rj.test(txtE.val())) {
            tbE.html("* Email phải theo biểu thức chính quy");
            return false;
        }
        tbE.html("*");
        return true;
    }
    txtE.blur(KiemtraE);

    var txtSdt = $("#txtSdt");
    var tbSdt = $("#tbSdt");

    function KiemtraSdt() {
        // var rk = /^0\d{9,10}$/;
        var rk = /^(03\d{8,9}|09\d{8,9})$/;
        if (txtSdt.val() == "") {
            tbSdt.html("* Số điện thoại không được để trống");
            return false;
        }
        if (!rk.test(txtSdt.val())) {
            tbSdt.html("* Số điện thoại phải theo định dạng 0XXXXXXXXX");
            return false;
        }
        tbSdt.html("*");
        return true;
    }
    txtSdt.blur(KiemtraSdt);

    $("#btnSave").click(function() {
        if (!KiemtraTen() || !KiemtraTaikhoan() || !KiemtraMk() || !KiemtraE() || !KiemtraSdt()) {
            $("#thongbao").html("Mời bạn nhập đúng và đẩy đủ thông tin");
            return false;
        }
        var ten = txtTen.val();
        var taikhoan = txtTaikhoan.val();
        var mk = txtMk.val();
        var email = txtE.val();
        var sdt = txtSdt.val();
        var them = "<tr><td>" + (i++) + "</td><td>" + ten + "</td><td>" + taikhoan + "</td><td>" + mk + "</td><td>" + email + "</td><td>" + sdt + "</td></tr>";
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true
    });
});