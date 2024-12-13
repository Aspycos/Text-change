
const hello = document.getElementById("hello");
hello.addEventListener('click', myfunction);
function myfunction() {
  document.getElementById("hello").innerHTML = 'hello world right this road';
  //alert("hello bro");
};