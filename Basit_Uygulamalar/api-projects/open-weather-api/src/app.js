import { OPENWEATHER_API_KEY } from "./key.js";
let cityInput = document.getElementById("city-input");
let searchBtn = document.getElementById("search-btn");
let cityNameElement = document.getElementById("city-name");
let temperatureElement = document.getElementById("temperature");
let weatherCondition = document.getElementById("weather-condition");
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
        // Şehir ve Ülke
        cityNameElement.textContent = `${data.name}, ${data.sys.country}`;
        // Sıcaklık
        temperatureElement.textContent = `Sıcaklık: ${data.main.temp.toFixed(1)}°C`;
        // Hava Durumu
        weatherCondition.textContent = `Durum: ${capitalizeFirstLetter(data.weather[0].description)}`;
        // Giriş alanını temizle
        cityInput.value = "";
        console.log(data); // Konsola veri yazdırma (isteğe bağlı)
    }
    catch (error) {
        console.error(error);
        alert("Hava durumu bilgileri alınamadı. Lütfen tekrar deneyin.");
    }
};
// Hava durumu açıklamasının ilk harfini büyük yapmak için bir yardımcı fonksiyon
const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
// Olay dinleyiciler
searchBtn.addEventListener("click", searchWeather);
cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchWeather();
    }
});
