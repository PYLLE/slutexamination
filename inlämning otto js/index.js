const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const navBar = document.querySelectorAll(`option`)
const mainBack = document.querySelector(`main`)
const backtoPlanet = document.querySelector(`.back`)
const info = document.querySelector(`.info`);
const planetElems = document.querySelectorAll('option')
const button = document.querySelector(`button`)
const section = document.querySelectorAll(`section`)

let el = "";


async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    
}



function toggleInfo() {
    info.classList.toggle("show");
}





async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF'
        }
    });
    planets = await response.json();
    console.log('planets: ', planets.bodies)
}

for (let i =0; i<planetElems.length; i++){
    planetElems[i].addEventListener('click', async () =>{
    toggleInfo()
    info.innerHTML ='';
    el ="";
    el =`
            <section class="content">
                <p class="planetName">${planets.bodies[i].name}</p>
                <p class="planetLatin">${planets.bodies[i].latinName}</p>
                <p id="planetsInfo">${planets.bodies[i].desc}</p>
                <p class="line1"></p>
                <p id="planetOmkrets">OMKRETS: </p>
                <p class="Omkrets">${planets.bodies[i].circumference}</p>
                <h3 class="MaxTempRubirk">MAX TEMPERATUR: </h3>
                <p class="Maxtemperatur">${planets.bodies[i].temp.day}</p>
                <h3 class="MinTempRubrik">MIN TEMPERATUR: </h3>
                <p class="Mintemperatur">${planets.bodies[i].temp.night}</p>
                <h3 class="KilometerRubrik">KM FRÅN SOLEN: </h3>
                <p class="Kilometers">${planets.bodies[i].distance}</p>
                <p class="line2"/></p>
                <h3 class="MoonsRubrik">MÅNAR: </h3>
                <p class="moons">${planets.bodies[i].moons}</p>
                <button class="back">Tillbaka</button>
            </section>
        `

            info.insertAdjacentHTML('beforeend', el);
            const button2 = document.querySelector(`.back`)
        button2.addEventListener("click", () => {
        toggleInfo();
})
            console.log(planets)
    //showInformation();
})
}

getKey();
getPlanets();

/*
function showInformation(){
    document.getElementById('infoPage').hidden(false);
}
*/

/*
for(let i = 0; i <navBar.length; i++){
    navBar[i].addEventListener ('click', () => {
        const url = navBar.getAttribute('type')
        console.log(src)
    })
    
}
*/

/*links.forEach(element => {
    element.addEventListener('click', () => {
        navBar.style.display = `none`;
        mainBack.style.display = `block`;

    })
})*/



// addClickEvent()