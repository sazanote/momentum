const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const second = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${second}`;
  return hours;
} // but Hour, Minute, Second가 10보다 작을 때 앞에 0이 추가됨.


const hour = getClock();
setInterval(getClock, 1000);