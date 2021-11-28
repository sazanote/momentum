const images = [
  "01.png",
  "02.jpg",
  "03.png",
  "04.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bg";


document.body.appendChild(bgImage);