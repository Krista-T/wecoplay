const urlParams = new URLSearchParams(window.location.search);
console.log("URLSearchParams " + window.location);

const the_game_id = urlParams.get("game");
console.log("hey");
console.log(the_game_id);


const gamesInfo = "https://mariajalmeida.com/KEA/2nd_semester/weco_play/wp-json/wp/v2/page_detail/" + the_game_id;
console.log(gamesInfo);
console.log("each game");

window.addEventListener("DOMContentLoaded", getData);

function getData() {
    console.log("ready");
}
