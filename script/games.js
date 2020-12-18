let games = "https://mariajalmeida.com/KEA/2nd_semester/weco_play/wp-json/wp/v2/page_detail?_embed&per_page=20&_fields[]=title&_fields[]=_links";

window.addEventListener("DOMContentLoaded", getGames);

// fetch all of our data
function getGames() {
    fetch(games)
        .then(res => res.json())
        .then(processData);
}

// start to divide the data
function processData(data) {
    // console.log("here are the games");
    //  console.log(data);
    data.forEach(retrieveSingleGame);
}

// call in each single game and do magical things
function retrieveSingleGame(gameDivision) {
    // console.log(gameDivision);
    // console.log("hey game");

    const template = document.querySelector("#games").content;
    const clone = template.cloneNode(true);

    const title = clone.querySelector("h2");
    title.textContent = gameDivision.title.rendered;
    const images = gameDivision._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    clone.querySelector("img").src = images;

    // append child
    document.querySelector("main").appendChild(clone);

}


//filters
let categories = document.querySelectorAll(".categories button");
console.log(categories);
categories.forEach(btn => {
    addEventListener("click", () => {
        fetch("https://mariajalmeida.com/KEA/2nd_semester/weco_play/wp-json/wp/v2/categories")
            .then(res => res.json())
            .then(showCategory);

        //triggers all btns
        
        console.log(btn);

        //  if(btn.classList.contains("active")){
        //         btn.classList.remove("active")
        //      }else{
        //          btn.classList.add("active")  
        //      }
    });



    function showCategory(subject) {
        console.log("Category listing");
        subject.forEach(cat => {
            //            console.log("Subject listener");

            console.log(cat.slug);
                })

    }

});