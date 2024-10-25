let bookmarks = document.querySelectorAll(".bookmark");
let hearts = document.querySelectorAll(".like");
let feedImgs = document.querySelectorAll(".feed-img");
let profileImg = document.querySelector(".img-grid");

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("material-symbols-rounded");
  });
});

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("red");
    heart.classList.toggle("material-symbols-rounded");
  });
});

feedImgs.forEach((img) => {
  let lastTap = 0;
  let likeHeart = img.querySelector(".tap-heart");
  let sibiling = img.nextElementSibling.querySelector(".like");
  console.log(sibiling);
  img.addEventListener("touchstart", () => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    if (tapLength < 500 && tapLength > 0) {
      likeHeart.classList.toggle("hidden");
      likeHeart.classList.toggle("liked");
      sibiling.classList.toggle("red");
      sibiling.classList.toggle("material-symbols-rounded");
    }
    lastTap = currentTime;
  });

  img.addEventListener("dblclick", () => {
    likeHeart.classList.toggle("hidden");
    likeHeart.classList.toggle("liked");
    sibiling.classList.toggle("red");
    sibiling.classList.toggle("material-symbols-rounded");
  });
});

for (let i = 0; i < 9; i++) {
  let img = document.createElement("img");
  img.setAttribute("src", `https://picsum.photos/20${i}`);
  img.setAttribute("alt", `img${i}`);
  profileImg.appendChild(img);
}
