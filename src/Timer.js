let sec = 15;

let min = 00;

function Timer(){
  sec--;
  // if(sec==-01){sec=59; min=min-1;}
  // else{min=min;}
  if(sec<=9){sec="0" + sec;}
  time=(min<=9 ? "0" + min : min) + ":" + sec;
  if(document.getElementById){timer.innerHTML=time;}
  inter=setTimeout("Timer()", 1000);
  // действие, если таймер 00:00
  // в данном случае переход на страницу http://www.net-f.ru/
  if(min=='00' && sec=='00'){sec="00"; clearInterval(inter);}
}
