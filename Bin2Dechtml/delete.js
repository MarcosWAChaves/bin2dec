function del(){
    var str = document.getElementById("binary_Number");
    var resp = document.getElementById("decimal_Number");
    str.value = "";
    resp.value = "";

    return str.value, resp.value;
}