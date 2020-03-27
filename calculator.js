function clickAdd() {
  var a = parseInt (document.getElementById("fnumber").value);
  var b = parseInt (document.getElementById("scnumber").value);
  var ketqua = a + b;
  document.getElementById("ketqua").innerHTML= ketqua;
}
function clickMinus() {
  var a = parseInt (document.getElementById("fnumber").value);
  var b = parseInt (document.getElementById("scnumber").value);
  var ketqua = a - b;
  document.getElementById("ketqua").innerHTML= ketqua;
}
function clickMultiply() {
  var a = parseInt (document.getElementById("fnumber").value);
  var b = parseInt (document.getElementById("scnumber").value);
  var ketqua = a * b;
  document.getElementById("ketqua").innerHTML= ketqua;
}
function clickDevide() {
  var a = parseInt (document.getElementById("fnumber").value);
  var b = parseInt (document.getElementById("scnumber").value);
  var ketqua = a / b;
  
  if(isNaN(ketqua)){
    ketqua = 'vo nghiem'
  }
  document.getElementById("ketqua").innerHTML= ketqua;
}
function clickPow() {
  var a = parseInt (document.getElementById("fnumber").value);
  var b = parseInt (document.getElementById("scnumber").value);
  var ketqua = Math.pow (a,b) ;
  document.getElementById("ketqua").innerHTML= ketqua;
}