function amu() {
    var sud = document.getElementById("text");
    var inputdata = sud.value;

    var expression = /^[\d+\-*/().]+$/.test(inputdata);

    if (expression) {
        try {
            var result = eval(inputdata);
           sud.value = result;
        }
        catch (error) {
            alert("Error in expression" + error.message);
            sud.value = "";
        }
    }
    else{
        alert("Hi, This is sudarsan. Pls enter a valid number");
        sud.value="";
    }

}