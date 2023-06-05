function btnclick(number){
    // console.log("i got clicked");
    document.getElementById("screen").value+=number;
}
function clearscreen(){
    document.getElementById("screen").value=" "
}
function btnclickequ(){
    var num1 = document.getElementById('screen').value;
    var num2 = eval(num1);
    document.getElementById('screen').value = num2;
}


