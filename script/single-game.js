window.addEventListener("DOMContentLoaded", getData);

const gamesInfo = "https://mariajalmeida.com/KEA/2nd_semester/weco_play/wp-json/wp/v2/page_detail?_embed&per_page=20";

function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URLSearchParams " + window.location);
    const the_game_id = urlParams.get("page");
    console.log(the_game_id);

    if (the_game_id) {
        fetch("https://mariajalmeida.com/KEA/2nd_semester/weco_play/wp-json/wp/v2/page_detail/" + the_game_id + "?_embed")
            .then(res => res.json())
            .then(showGame);
    } else {
        fetch(gamesInfo)
            .then(res => res.json())
            .then(handleData);
    }
}

function handleData(games) {
    console.log("games?");
    console.log(games);

}

function showGame(game) {
    console.log(game);
    console.log("FUCK MIT LIV");

    const template = document.querySelector("#single_game").content;
    const clone = template.cloneNode(true);

    const h1 = clone.querySelector("h1");
    h1.textContent = game.title.rendered;
    document.querySelector("main").appendChild(clone);
}
