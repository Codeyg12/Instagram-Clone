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
  img.querySelector("img").classList.toggle("none");
  setTimeout(() => {
    img.querySelector(".lg-skeleton").classList.toggle("none");
    img.querySelector("img").classList.toggle("none");
  }, 1500);
  let lastTap = 0;
  let likeHeart = img.querySelector(".tap-heart");
  let sibiling = img.nextElementSibling.querySelector(".like");
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
  let div = document.createElement("div");
  div.setAttribute("class", "sm-skeleton");
  let innerDiv = document.createElement("div");
  innerDiv.setAttribute("class", "sm-skeleton-item");
  div.appendChild(innerDiv);
  profileImg.appendChild(div);
}

for (let i = 0; i < 9; i++) {
  let img = document.createElement("img");
  img.setAttribute("src", `https://picsum.photos/20${i}`);
  img.setAttribute("alt", `img${i}`);

  img.onload = function () {
    let smSkeleton = profileImg.children[i];
    smSkeleton.classList.toggle("none");
    profileImg.appendChild(img);
  };
}
