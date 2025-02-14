// Din fisierul index.js va pleca toata funtionalitatea noastra
const currentCityTag = document.querySelector(".current-city");

// Daca nu avem salvat in localStorage nici un oras atunci salvam ca default Bucuresti - asta facem pentru ca vrem sa persistam ce alege user-ul din drop-down-ul cu orase
//Primul pas - extragem ce este in localStorage dupa cheia city:
let currentCity = localStorage.getItem("city");

//Daca nu avem salvat in localStorage nici o valoare pentru city atunci o setam cu metoda setItem
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam tag-ul sa afiseze valoarea din localStorage
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta direct cand intram pe pagina
displayCurrentWeather(currentCity);
// Afisam si prognoza pe urmatoarele 5 zile
displayWeatherForecast(currentCity);

//To top button - activam ca la 200px scroll-ati sa apara butonul de toTop

document.addEventListener("scroll", () => {
  const toTopButton = document.querySelector("#to-top");

  if (window.scrollY > 400) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
});
