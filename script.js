let bookmarks = document.querySelectorAll(".bookmark");
let hearts = document.querySelectorAll(".like");
let feedImgs = document.querySelectorAll(".feed-img")

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

feedImgs.forEach(img => {
    let lastTap = 0
    // Add double click and double tap functionality
    img.addEventListener("dblclick", () => {
        console.log(img);
        // Get siblings and childeren on image to add the heart
        
        // heart.classList.toggle("red");
        // heart.classList.toggle("material-symbols-rounded");

        // Add a heart animation to appear and then move up the Y axis and disappear
    })
})


// Finish account page