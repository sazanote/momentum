const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// string만 포함된 변수는 대문자로 표기함

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  if (hour >= 7 && hour < 12) {
    greeting.innerText = `좋은 아침입니다, ${username}님.`;
  } else if (hour >= 12 && hour < 18) {
    greeting.innerText = `점심은 드셨나요?`;
  } else if ( hour >= 18 && hour < 24) {
    greeting.innerText = `${username}님의 하루는 어땠나요?`;
  } else if ( hour >= 0 && hour < 7) {
    greeting.innerText = `좋은 새벽입니다, ${username}님.`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}