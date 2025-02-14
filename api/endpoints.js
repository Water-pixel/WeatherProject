//1. Constantele care stim ca nu se vor schimba niciodata in proiectul nostru putem sa le pastram cu 'const' iar denumirea lor poate fi scrisa cu upperCASE
//2. API Key-urile sau token-urile nu ar trebui sa stea intr-un fisier text - de ce? - pentru ca nu este sigur. Aceste KEY-uri ar trebui sa stea pe un server.
const API_KEY = `eedca9073cc649311d9af341c1e9d94e`;

// Construim link-urile (endpoint-urile) serverelor catre care vom face call-urile ca sa primim date despre vreme

function getCurrentWeatherEndpoint(city) {
  // Cand se foloseste ? dupa URL inseamna ca avem de-a face cu quert params(query string) - asta inseamna ca API-ul va lua in considerare acei parametrii pentru a ne intoarce date in functie de ei
  // Noi avem urmatorii query params:
  //1. q = este folosit pentru a identifica orasul
  //2. lang = este pentru a-i spune API-ul sa ne intoarca datele in limba romana
  //3. units = este folosit pentru a spune API-ul sa ne intoarca datele in unitate de temperatura care sunt in Celsius
  //4. appid
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
