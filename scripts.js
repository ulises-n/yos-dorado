document.getElementById("loveButton").addEventListener("click", () => {
  const message = document.getElementById("message");
  const content = document.getElementById("content");
  const song = document.getElementById("song");

  
  song.play();

  message.classList.add("hidden");

  const flowerImage = document.createElement("img");
  flowerImage.id = "flowerImage";
  flowerImage.src =
    "cat-kiss-kiss-cat.gif"
  content.appendChild(flowerImage);

  
  flowerImage.style.display = "block";
});
