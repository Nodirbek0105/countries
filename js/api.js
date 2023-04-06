const all = "all";
const apiKey = `https://restcountries.com/v3.1/`;
// https://restcountries.com/v3.1/name/deutschland
//countries-inner
let elCountriesBox = document.querySelector("[data-box-countries]");
//countries-form
// let elForm = document.querySelector("[data-form]");
let elInputSearch = document.querySelector("[data-form-search]");
let elTitle = document.querySelector("[data-form-title]");
let elLang = document.querySelector("[data-form-lang]");
let elDescription = document.querySelector("[data-form-description]");
let elImgUrl = document.querySelector("[data-form-img-url]");
let elBtn = document.querySelector("[data-add-btn]");
let elTemplate = document.querySelector("[data-countries-template]");
let elTemplateAbout = document.querySelector("[data-template]");
let darkMode = document.querySelector("[data-dark-mode]");
let lightMode = document.querySelector("[data-light-mode]");
let selectRegion = document.querySelector('[data-select-region]');

loadingFirst();
async function loadingFirst() {
  elCountriesBox.innerHTML = `<div class="inner" style="width: 200px; height: 200px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(22, 29, 37); display: block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <g transform="rotate(0 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(30 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(60 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(90 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(120 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(150 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(180 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(210 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(240 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(270 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(300 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(330 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#aaaaaa">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  </svg></div>`;
searchCountries("all")
}

function mode(el1, el2, body = document.body) {
  body.classList.toggle("light-theme");
  el1.classList.toggle("right-nol");
  el1.classList.toggle("right-yuz");
  el2.classList.toggle("right-nol");
  el2.classList.toggle("right-yuz");
}

darkMode.addEventListener("click", (evt) => {
  evt.preventDefault();
  mode(lightMode, darkMode); // document.body.classList.add("dark-theme");  darkMode.classList.toggle("right-nol");  darkMode.classList.toggle("right-yuz");  lightMode.classList.toggle("right-nol");  lightMode.classList.toggle("right-yuz");
});

lightMode.addEventListener("click", (evt) => {
  evt.preventDefault();
  mode(lightMode, darkMode); // document.body.classList.remove("dark-theme");  darkMode.classList.toggle("right-nol");  darkMode.classList.toggle("right-yuz");  lightMode.classList.toggle("right-nol");  lightMode.classList.toggle("right-yuz");
});

const elSearchInput = document.querySelector("[data-input-search]");
elSearchInput.addEventListener("input", (evt) => {
  evt.preventDefault();
  searchCountries(elSearchInput.value);
});

document.body.addEventListener("click", (evt) => {
  modalCloseModal(evt);
  modalOpenModal(evt);
});

selectRegion.addEventListener('change', evt=>{
  searchCountriesRegion(selectRegion.value)
})

async function searchCountries(value) {
  try {
    if(value !== "all"){
      let response = await fetch(`${apiKey}name/${value}`);
      let result = await response.json();
      renderCountries(result);
      console.log(result);
    }
    if(value === "all"){
      let response = await fetch(`${apiKey}${value}`);
      let result = await response.json();
      renderCountries(result);
      console.log(result);
    }
  } catch (error) {
    renderE(error);
  }
}

async function searchCountriesRegion(value) {
  try {
    if(value !== "all"){
      let response = await fetch(`${apiKey}region/${value}`);
      let result = await response.json();
      renderCountries(result);
      console.log(result);
    }
    if(value === "all"){
      let response = await fetch(`${apiKey}${value}`);
      let result = await response.json();
      renderCountries(result);
      console.log(result);
    }
  } catch (error) {
    renderE(error);
  }
}

function renderCountries(arrayFirst) {
  elCountriesBox.innerHTML = "";
  arrayFirst.forEach((countries) => {
    elCountriesBox.appendChild(createLi(countries));
  });
}

function createLi(countries) {
  const card = elTemplate.content.cloneNode(true);
  card.querySelector("li").dataset.countrie = countries.cca2;
  card.querySelector("img").src =
    countries.flags.svg === "N/A" ? "./img/no-poster.gif" : countries.flags.svg;
  card.querySelector("img").alt = countries.name.official;
  card.querySelector("[data-countries-title]").textContent =
    countries.name.official;
  card.querySelector(
    "[data-countries-population]"
  ).textContent = `population: ${countries.population}`;
  card.querySelector(
    "[data-countries-region]"
  ).textContent = `region: ${countries.region}`;
  card.querySelector(
    "[data-countries-capital]"
  ).textContent = `capital: ${countries.capital}`;
  card.querySelector(
    "[data-countries-area]"
  ).textContent = `area: ${countries.area} sq km`;
  return card;
}

function modalOpen(el) {
  el.classList.toggle("d-none");
  el.classList.toggle("d-flex");
}

function modalCloseModal(e) {
  let elM = e.target.closest("[data-modal]");
  let elMC = e.target.closest("[data-modal-content]");
  let elMClose = e.target.closest("[data-close-modal]");
  if (!elM) return;
  if (!elMClose) {
    if (elMC) return;
  }
  modalOpen(elM);
}

function modalOpenModal(e) {
  let elM = e.target.closest("[data-countrie-isdvhuvefivihefvih]");
  if (!elM) return;
  let id = elM.dataset.countrie;
  let modal = document.querySelector("[data-modal]");
  modalOpen(modal);
  aboutCountries(id);
}
let aboutUl = document.querySelector("[data-ul2]");

async function aboutCountries(num) {
  try {
    aboutUl.innerHTML = `<div class="loader"><span></span><span></span><span></span></div>`;
    let response = await fetch(`${apiKey}alpha/${num}`);
    let result = await response.json();
    aboutUl.innerHTML = "";
    console.log(result);
    aboutUl.append(createDiv(result));
  } catch (error) {
    renderE(error);
  }
}

function createDiv(countries) {
  aboutUl.innerHTML = "";
  const card = elTemplateAbout.content.cloneNode(true);
  debugger
  console.log(countries.name);
  // card.querySelector("img").src =
  //   countries.flags.png === "N/A" ? "./img/no-poster.gif" : countries.flags.png;
  // card.querySelector("img").alt = countries.flags.alt;
  console.log(card.querySelector("[data-img-countries]"));
  card.querySelector("[data-title-countries]").textContent =
    countries.name.official;
  card.querySelector(
    "[data-population]"
  ).textContent = `population: ${countries.population}`;
  card.querySelector(
    "[data-region]"
  ).textContent = `region: ${countries.region}`;
  card.querySelector(
    "[data-capital]"
  ).textContent = `capital: ${countries.capital}`;
  card.querySelector(
    "[data-area]"
  ).textContent = `area: ${countries.area} sq km`;
  card.querySelector(
    "[data-language]"
  ).textContent = `language: ${countries.language}`;
  card.querySelector(
    "[data-status]"
  ).textContent = `status: ${countries.status}`;
  card.querySelector(
    "[data-subregion]"
  ).textContent = `subregion: ${countries.subregion}`;
  console.log(card);
  return card;
}

function renderE(err) {
  console.log(err);
}

// renderCountries(allC);
