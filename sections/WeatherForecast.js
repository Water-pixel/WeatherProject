// Declaram functia care o sa ne faca predictia pentru vreme pentru urmatoarele 5 zile. Apelul functiei se va face in fisierul ChooseLocation.js si in index.js

function displayWeatherForecast(city) {
  // Generam link-ul serverului catre care trebuie sa facem call-ul pe baza orasului
  const forecastEndpoint = getForecastEndpoint(city);

  // Inainte sa facem call-ul catre server si ca sa putem sa afisam noile informatii in HTML, trebuie sa selectam elementul de interes
  let swiperWrapper = document.querySelector(".swiper-wrapper"); // schimbam selectorul

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      // Din datele venite de la OpenWeather API, noi o sa pastram doar proprietatea list(deoarece ea contine predictia vremii pe urmatoarele zile) - care este un array

      const { list } = data;

      // Avem nevoie de un obiect in care sa grupam predictiile pe zile

      const daysMap = {};

      // Iteram prin cele 40 de predictii primite de la server pe care le gasim in variabila list

      list.forEach((element) => {
        // Extragem proprietatea dt de pe elementul iterat
        const { dt } = element;
        // Folosim functia getDayOfTheWeek din utilizatorul date.js pentru a transforma data in :Luni, Marti, Miercuri ... etc.
        const day = getDayOfTheWeek(dt);
        // Daca deja avem ziua saptamanii in obiectul daysMap atunci ii adaugam o noua predictie de vreme (adica obiectul peste care iteram: element)
        if (daysMap[day]) {
          daysMap[day].push(element);
        } else {
          // Altfel daca ziua saptamanii nu exista in obiectul daysMap atunci il adaugam impreuna cu noua predictie( adica obiectul curent peste care iteram: element)
          daysMap[day] = [element];
        }
      });

      swiperWrapper.innerHTML = ""; // curatam continutul vechi

      // Parcurgem cu ajutorul for...in continutul din obiectul daysMap - cheile sunt zilele saptamanii pentru care o sa afisam predictiile
      for (key in daysMap) {
        let daysPredictions = daysMap[key];
        //Afisam ziua saptamanii pe ecran( adica inseram in HTML) ca si slide
        let slideContent = `<div class="swiper-slide">
        <h3 class="text-primary">${key}</h3>`;

        daysPredictions.forEach((element) => {
          const { dt, main, weather } = element;
          const hour = getHour(dt);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          // Afisam pe ecran ( adica inseram in HTML ) toate informatiile de mai sus

          slideContent += `
          <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
            <div>${hour}</div>
            <div>
            <img src="${weatherIcon}" alt="weather icon">
            </div>
            <div class="fs-3"><strong>${temperature}°C</strong></div>
            <div class="text-capitalize">${weatherDescription}</div>
            <div class="real-feel">Real Feel:<strong>${realFeel}°C</strong></div>
          </div>
          `;
        });
        slideContent += "</div>"; // inchidem slide-ul
        swiperWrapper.innerHTML += slideContent; // adaugam continutul slide-ului la vechiul continut al container-ului swiper-wrapper
      }

      // Inițializăm Swiper.js după ce am populat datele
      new Swiper(".weatherSwiper", {
        slidesPerView: 1, // Afișează un slide per ecran
        loop: true, // Navigare infinită
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 4000, // Slide automat la fiecare 4 secunde
          disableOnInteraction: false,
        },
      });
    });
}
