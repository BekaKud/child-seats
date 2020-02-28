let popup = document.getElementById('butt');
let popupToggle = document.getElementById('myButt');
let close = document.getElementById('closed');
//форма
popup.onclick = function() {
  popupToggle.style.display = "flex";
};
close.onclick = function() {
  popupToggle.style.display = "none";
};
window.onclick = function(e) {
  if (e.target == popupToggle)
    popupToggle.style.display = "none";
};
//уведомление о том что запрос принят
let accepted = document.getElementById('accepted');
let popupToggle1 = document.getElementById('myButt-1');
let close1 = document.getElementById('closed-1');
accepted.onclick = function() {
  popupToggle.style.display = "none";
  popupToggle1.style.display = "flex";
};
close1.onclick = function() {
  popupToggle1.style.display = "none";
};
document.onclick = function(i) {
  if (i.target == popupToggle1)
    popupToggle1.style.display = "none";
};
//уведоиление для других кнопок
let buttonFirst = document.getElementById('buttonFirst');
buttonFirst.onclick = function(){
  popupToggle1.style.display = "flex";
};
let buttonSecond = document.getElementById('buttonSecond')
buttonSecond.onclick = function(){
  popupToggle1.style.display = "flex";
}
let buttonFormFirst = document.getElementById('buttonFormFirst');
buttonFormFirst.onclick = function() {
  popupToggle.style.display = "flex";
};
let buttonFormSecond = document.getElementById('buttonFormSecond');
buttonFormSecond.onclick = function() {
  popupToggle.style.display = "flex";
};
