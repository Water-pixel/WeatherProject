// Aici vom declara functia care ne cheama API-ul de la OpenWeather pentru vremea curenta si ne va afisa datele in pagina - apelul catre functia asta se va face din ChooseLocation.js (pe eventListenerele deja adaugate pe butoanele din dropdown)

function displayCurrentWeather(city) {
  // Prima data ne generam link-ul catre care vom face call-ul
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);

  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Vom extrage datele de interes de pe ce am primit de la API: name, dt, main, weather, wind
      const { name, dt, main, weather, wind } = data;

      const day = getDayOfTheWeek(dt);
      const hour = getHour(dt);
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);
      // Atentie - proprietatea weather este un array cu un singur element
      const weatherDescription = weather[0].description;
      const weatherIcon = getWeatherIcon(weather[0].icon);
      const windSpeed = Math.round(windKmPerHour(wind.speed));

      // Afisam datele primite si formatate mai sus in pagina
      // Pentru asta prima data va trebui sa scriem un selector de JS care sa acceseze elementul de DOM
      const currentWeatherContainer =
        document.querySelector(".current-weather");
      // Al doilea pas: folosind prorpietatea innerHTML de pe variabila care a accesat elementul de DOM -> inseram datele
      currentWeatherContainer.innerHTML = `
          <div class="px-3">
            <div class="fs-2 mb-2"><strong>${name}</strong></div>
            <div class="fs-4"><strong>${day}</strong>, ${hour}</div>
            <div class="d-flex align-items-center justify-content-center">
                <strong class="fs-1">${temperature}°C</strong>
                <img src="${weatherIcon}"/>
            </div>
          </div>
          <div class="px-3">
            <p class="fs-5">Real Feel: <strong>${realFeel}°C</strong></p>
            <p class="fs-5 text-capitalize">${weatherDescription}</p>
            <p class="fs-5">Wind: <strong>${windSpeed} km/h</strong></p>
          </div>
        `;
    });
}
