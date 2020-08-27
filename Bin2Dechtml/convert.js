function convertButton() {
    var str = document.getElementById("binary_Number");
    var resp = document.getElementById("decimal_Number");
        
    var p0 = str.value.charAt(7);
    var p1 = str.value.charAt(6);
    var p2 = str.value.charAt(5);
    var p3 = str.value.charAt(4);
    var p4 = str.value.charAt(3);
    var p5 = str.value.charAt(2);
    var p6 = str.value.charAt(1);
    var p7 = str.value.charAt(0);

    var result = p7 * 128 + p6 * 64 + p5 * 32 + p4 * 16 + p3 * 8 + p2 * 4 + p1 * 2 + p0 * 1;
    
    if(p0 == ""){
        var result = p7 * 64 + p6 * 32 + p5 * 16 + p4 * 8 + p3 * 4 + p2 * 2 + p1 * 1;
    };

    if(p0 == "" && p1 == ""){
        var result = p7 * 32 + p6 * 16 + p5 * 8 + p4 * 4 + p3 * 2 + p2 * 1;
    };

    if(p0 == "" && p1 == "" && p2 == ""){
        var result = p7 * 16 + p6 * 8 + p5 * 4 + p4 * 2 + p3 * 1;
    };

    if(p0 == "" && p1 == "" && p2 == "" && p3 == ""){
        var result = p7 * 8 + p6 * 4 + p5 * 2 + p4 * 1;
    };

    if(p0 == "" && p1 == "" && p2 == "" && p3 == "" && p4 == ""){
        var result = p7 * 4 + p6 * 2 + p5 * 1;
    };

    if(p0 == "" && p1 == "" && p2 == "" && p3 == "" && p4 == "" && p5 == ""){
        var result = p7 * 2 + p6 * 1;
    };

    if(p0 == "" && p1 == "" && p2 == "" && p3 == "" && p4 == "" && p5 == "" && p6 == ""){
        var result = p7 * 1;
    };


    return resp.value = result;
}

