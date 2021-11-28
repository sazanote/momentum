const API_KEY = "c998d0de7872e714aa9992b6fa76be75";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json().then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
  }));
}
function onGeoError() {
  // 유저에게서 지역정보를 받을 수 없을 때
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//https://api.openweathermap.org/data/2.5/weather?lat=34.9036373&lon=128.6844245&appid=c998d0de7872e714aa9992b6fa76be75