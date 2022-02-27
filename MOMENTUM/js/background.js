const images = ["lake.jpg", "sunrise.jpg", "milkyway.jpg", "astronomy.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
document.body.style.backgroundImage = `url(img/${chosenImage})`;
//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);