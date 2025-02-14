const bucharestButton = document.querySelector(".dropdown-menu .bucharest");

const timisoaraButton = document.querySelector(".dropdown-menu .timisoara");

const oradeaButton = document.querySelector(".dropdown-menu .oradea");

const sibiuButton = document.querySelector(".dropdown-menu .sibiu");

const aradButton = document.querySelector(".dropdown-menu .arad");

function updateCurrentCityName(city) {
  //Prima data selectam tag-ul de HTML care este dedicat afisarii orasului curent
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  //Actualizam orasul in localStorage
  localStorage.setItem("city", city);
  //Actualizam orasul afisat pe ecran
  updateCurrentCityName(city);
  //Afisam vremea curenta pentru orasul selectat din drop-down
  displayCurrentWeather(city);
  // Afisam prognoza pe 5 zile
  displayWeatherForecast(city);
}
// Adaugam eventListenerii pentru butoanele din drop-down

bucharestButton.addEventListener("click", () => {
  updateWeather("București");
});

timisoaraButton.addEventListener("click", () => {
  // Aici ar trebui sa schimbam orasul curent din HTML
  updateWeather("Timișoara");
});

oradeaButton.addEventListener("click", () => {
  // Aici ar trebui sa schimbam orasul curent din HTML
  updateWeather("Oradea");
});

sibiuButton.addEventListener("click", () => {
  // Aici ar trebui sa schimbam orasul curent din HTML
  updateWeather("Sibiu");
});

aradButton.addEventListener("click", () => {
  // Aici ar trebui sa schimbam orasul curent din HTML
  updateWeather("Arad");
});
