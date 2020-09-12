function button00(num){

    var str = document.getElementById("binary_Number");

        if (typeof binaryNumber == 'undefined') {
            str.value = '';
         }

         str.value = str.value + num;
         binaryNumber = 1;

}