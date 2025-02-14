function getDayOfTheWeek(utcDate) {
  //Pentru a crea o data dintr-o valoare utc trebuie sa o inmultim cu 1000
  const date = new Date(utcDate * 1000);
  // O sa extragem ziua saptamanii sub forma de Index
  const dayIndex = date.getDay();
  let dayName;
  switch (dayIndex) {
    case 0:
      dayName = "Duminică";
      break;
    case 1:
      dayName = "Luni";
      break;
    case 2:
      dayName = "Marti";
      break;
    case 3:
      dayName = "Miercuri";
      break;
    case 4:
      dayName = "Joi";
      break;
    case 5:
      dayName = "Vineri";
      break;
    case 6:
      dayName = "Sâmbătă";
      break;
    default:
      // afisam o eroare daca index-ul nu este valid ( nu ar trebui sa se ajunga aici deoarece OpenWeather intoarce zilele saptamanii corect)
      throw new Error("Indexul zilei trebuie sa fie intre 0 si 6");
  }
  // returnam ziua echivalenta indexului
  return dayName;
}

function getHour(utcDate) {
  // Pentru a creea o data, pornind de la o valoare in format utc trebuie sa o inmultim cu 1000
  const date = new Date(utcDate * 1000);
  // Extrage ora si daca are o valoare mai mica de 10 ii adaugam un 0
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  // Returnam ora si minutele sub formatul dorit
  return `${hours}:${minutes}`;
}
