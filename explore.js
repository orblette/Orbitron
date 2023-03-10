// 1st link   https://api.le-systeme-solaire.net/rest/bodies/
// 2nd link   https://api.le-systeme-solaire.net/ + planet name
let btn = document.getElementById("btn")
let rbutton = document.getElementById("random");
let planets = document.getElementById("planets");
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

function renderdata(data) {
  let planet = document.createElement("h3");

  planet.innerHTML = data.bodies.map((item) => {
    let planet = document.createElement("li");
    planet.innerHTML = `<div class="planetCard" style="list-style-type: none">
          <div class="content">
            <div class="title">Name: ${item.name}</div>
            <div class="title">Know By: ${item.englishName}</div>
            <p class="information">Density: ${item.density}<br> Gravity: ${item.gravity} <br> Average Temperature: ${item.avgTemp}</p>
            <p class="date">Discovery Date: ${item.discoveryDate || "Unknown"}</p>
            <p class="date">Discovered By: ${item.discoveredBy || "Unknown"}</p>
            <p> Around the Planet: ${item.aroundPlanet.planet}</p>
          </div>
        </div>`
    // planet.value = data[index].bodies;
    // index = (index + 1) % data.length;
    planets.appendChild(planet);
  })
}


