// 1st link   https://api.le-systeme-solaire.net/rest/bodies/
// 2nd link   https://api.le-systeme-solaire.net/ + planet name
let btn = document.getElementById("btn")
let rbutton = document.getElementById("random");
let planets = document.getElementById("planets");
let modals = document.querySelector(".modals");
// let index = 0;

window.addEventListener("load", (event) => { fetching() });

function fetching() {
  fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      renderdata(data)
    })
}
// random.addEventListener("click", renderdata());


function getInfo(body) {
  fetch("https://api.le-systeme-solaire.net/rest/bodies/" + body)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      renderdata2(data)
    })
}


function renderdata2(data) {
  modals.style.display = "block";
  modals.style.zIndex = "1000";
  // console.log("hey")
  let page = document.createElement("div");
  page.classList.add("page")
  page.innerHTML = `<h3>Discover intriguing facts and details about ${data.englishName}.</h3>
  <div class="title">Name: ${data.name}</div>
            <h4>Know By: ${data.englishName}</h4>
            <p>Density: ${data.density}<br> Gravity: ${data.gravity} <br> Average Temperature: ${data.avgTemp}</p>
            <p>Discovery Date: ${data.discoveryDate || "Unknown"}</p>
            <p>Discovered By: ${data.discoveredBy || "Unknown"}</p>
            <p>Moon: ${data.moons? data.moons.moon: "Unknown" || "Unknown"}</p>
            <button onClick="closeModal()" id="close">x</button>Click to close`
  console.log(page)
  console.log(modals)
  modals.appendChild(page);
}

function closeModal() {
  console.log("close")
  modals.style.display = "none";
  modals.innerHTML = "";
}


function renderdata(data) {
  data.bodies.map((item) => {
    let planet = document.createElement("div");
    planet.innerHTML = `<div class="planetCard" style="list-style-type: none">
          <div class="content">
            <div class="title">Name: ${item.name}</div>
            <div class="title">Know By: ${item.englishName}</div>
            <p class="information">Density: ${item.density}<br> Gravity: ${item.gravity} <br> Average Temperature: ${item.avgTemp}</p>
            <p class="date">Discovery Date: ${item.discoveryDate || "Unknown"}</p>
            <p class="date">Discovered By: ${item.discoveredBy || "Unknown"}</p>
   
          </div>
        </div>`
    // planet.value = data[index].bodies;
    // index = (index + 1) % data.length;
    planets.appendChild(planet);
  })
}
