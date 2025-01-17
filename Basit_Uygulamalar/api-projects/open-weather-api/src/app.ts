import {OPENWEATHER_API_KEY} from "./key"


let cityInput = document.getElementById("city-input") as HTMLInputElement;
let searchBtn = document.getElementById("search-btn") as HTMLButtonElement;

let cityNameElement = document.getElementById("city-name") as HTMLElement;
let temperatureElement = document.getElementById("temperature") as HTMLElement;
let weatherCondition = document.getElementById("weather-condition") as HTMLElement;

const searchWeather = async () => {
    try {
        const city = cityInput.value.trim();

        if (!city) {
            alert("Lütfen bir şehir adı girin.");
            return;
        }

        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error("Şehir bulunamadı. Lütfen doğru bir şehir adı girin.");
        }

        const data = await response.json();

        cityNameElement.textContent = `${data.name}, ${data.sys.country}`;

        temperatureElement.textContent = `Sıcaklık: ${data.main.temp.toFixed(1)}°C`;

        weatherCondition.textContent = `Durum: ${capitalizeFirstLetter(data.weather[0].description)}`;

        cityInput.value = "";

        console.log(data);
    } catch (error) {
        console.error(error);
        alert("Hava durumu bilgileri alınamadı. Lütfen tekrar deneyin.");
    }
};


const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};


searchBtn.addEventListener("click", searchWeather);
cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchWeather();
    }
});
