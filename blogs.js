let button = document.getElementsByClassName("btn");
let ul = document.querySelector(".cards");

//by classname, it gets the whole array. So we use get element by id.

window.addEventListener("load", (event) => {fetching()});

//search for loading

function fetching(){
  fetch("https://api.spaceflightnewsapi.net/v3/blogs")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      renderdata(data)
    }
)}

function renderdata(data) {
  data.map((item) => {
    // let cardImage = document.createElement("img");
    // let imageClass = document.createElement("div");
    // imageClass.classList.add("card_image");
    // let card = document.createElement("div");
    // card.classList.add("card")
    // cardImage.src = item.imageUrl;
    // imageClass.appendChild(cardImage);
    // card.appendChild(imageClass)
    
    let cardList = document.createElement("li");
    cardList.innerHTML = `<div class="card">
          <div class="card_image"><img src="${item.imageUrl}"></div>
          <div class="card_content">
            <div class="card_title">${item.title}</div>
            <p class="card_text">${item.summary}</p>
            <button id="btn btn-block"><a href="${item.url}"</a>${item.newsSite}</button>
          </div>
        </div>`

    ul.appendChild(cardList);
  })
}
                       