const daily = document.getElementById("daily")
window.addEventListener("load", (event) => { fetching() });

function fetching() {
  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      renderdata(data)
    })
}

function renderdata(item) {
  let dailyPic = document.createElement("p");
  dailyPic.innerHTML = `<div class="title">${item.title}</div>
  <div id="card_image"><img src="${item.url}" id="dailyImg"></div>
  <div class="description">${item.date}</div>
  <div class="description">${item.explanation}</div>`

  daily.appendChild(dailyPic);
}