async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/project2/link.html");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    return songs;
}
async function getImages() {
    let a = await fetch("http://127.0.0.1:3000/project2/link.html");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let imgs = div.getElementsByTagName("img");
    let images = [];
    for (let index = 0; index < imgs.length; index++) {
        const element = imgs[index];
        images.push(element.src);
    }
    return images;
}
async function getAuthors() {
    let a = await fetch("http://127.0.0.1:3000/project2/link.html");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let authors = div.getElementsByClassName("author");
    let authorNames = [];
    for (let index = 0; index < authors.length; index++) {
        authorNames.push(authors[index].innerText);
    }
    return authorNames;
}
async function getTitles() {
    let a = await fetch("http://127.0.0.1:3000/project2/link.html");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let titles = div.getElementsByClassName("song-title");
    let songTitles = [];
    for (let index = 0; index < titles.length; index++) {
        songTitles.push(titles[index].innerText);
    }
    return songTitles;
}
async function main() {
    let songs = await getSongs();
    let images = await getImages();
    let authors = await getAuthors();
    let titles = await getTitles();
    let player = document.querySelector(".box65");
    let playerBox = document.querySelector(".box62");
    let playerImg = document.querySelector(".box63");
    let playerTitle = document.querySelector(".box64");
    let playerAuthor = document.querySelector(".box66");
    let pays = document.querySelectorAll(
        ".pay1, .pay2, .pay3, .pay4, .pay5"
    );
    pays.forEach((pay, index) => {
        pay.addEventListener("click", (e) => {
            e.preventDefault();
            // Stop current song
            player.pause();
            // Load selected song
            player.src = songs[index];
            player.currentTime = 0;
            // Show bottom player
            playerBox.style.display = "flex";
            // Set song title
             playerTitle.innerText = titles[index];
            // Set album image
            playerImg.src = images[index];
            // Set author
            playerAuthor.innerText = authors[index];
            // Play song
            player.play();
        });
    });
}
main();

