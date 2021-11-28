const quotes = [
  {
    quote: "의욕적인 목표가 인생을 즐겁게 한다.",
    author: "로버트 H. 슐러",
  },
  {
    quote: "우리는 우리가 마음먹은 대로 될 수 있다.",
    author: "조지 러셀",
  },
  {
    quote: "미래는 현재에 의해서 얻어진다.",
    author: "새뮤얼 존슨",
  },
  {
    quote: "회복의 유일한 길은 다시 시작하는 것이다.",
    author: "체이즈",
  },
  {
    quote: "말하자마자 행동하는 사람, 그것이 가치있는 사람이다.",
    author: "엔니우스",
  },
  {
    quote: "유능한 사람은 언제나 배우는 사람이다.",
    author: "요한 볼프강 폰 괴테",
  },
  {
    quote: "시작은 전체의 반이다.",
    author: "아리스토텔레스",
  },
  {
    quote: "게으른 천재보다 꾸준한 굼벵이가 더 많은 일을 한다.",
    author: "",
  },
  {
    quote: "서두르지 말되, 쉬지도 말라.",
    author: "요한 볼프강 폰 괴테",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

function handleMouseOver() {
  author.style.opacity = 0.6;
}

function handleMouseOut() {
  author.style.opacity = 0;
}

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


quote.addEventListener("mouseover", handleMouseOver);
quote.addEventListener("mouseout", handleMouseOut);
//visibility hidden => visible