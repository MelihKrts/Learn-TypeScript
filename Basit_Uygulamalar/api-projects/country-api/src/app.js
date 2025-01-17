"use strict";
let countryInput = document.querySelector(".search-input");
let countryNameElement = document.querySelector(".country-name");
let countryFlagElement = document.querySelector(".country-flag");
let countryPopulation = document.getElementById("population");
let countryCapitalElement = document.getElementById("capital");
let countryRegionElement = document.getElementById("region");
let countryCurrencyElement = document.getElementById("currency");
let countryLanguageElement = document.getElementById("language");
let countryDemonymElement = document.getElementById("demonym");
countryInput === null || countryInput === void 0 ? void 0 : countryInput.addEventListener("input", (e) => {
    const target = e.target;
    let searchValue = target.value;
    if (!searchValue)
        return;
    // Önce tam eşleşme dene
    const exactURL = `https://restcountries.com/v3.1/name/${searchValue}?fullText=true`;
    fetch(exactURL)
        .then((response) => response.json())
        .then((data) => {
        if (data.length > 0) {
            updateCountryInfo(data[0]);
        }
        else {
            const partialURL = `https://restcountries.com/v3.1/name/${searchValue}`;
            return fetch(partialURL)
                .then((response) => response.json())
                .then((data) => {
                if (data.length > 0) {
                    updateCountryInfo(data[0]);
                }
            });
        }
    })
        .catch(error => console.error("Error fetching data", error));
});
function updateCountryInfo(country) {
    var _a, _b;
    countryNameElement.innerHTML = country.name.common;
    countryFlagElement.src = country.flags.png;
    countryFlagElement.alt = country.flags.alt;
    const formattedPopulation = new Intl.NumberFormat().format(country.population);
    countryPopulation.innerHTML = `<strong>Population:</strong> ${formattedPopulation}`;
    countryCapitalElement.innerHTML = `<strong>Capital: </strong> ${country.capital}`;
    countryRegionElement.innerHTML = `<strong> Region: </strong> ${country.region}`;
    const currency = Object.values(country.currencies);
    const language = Object.values(country.languages);
    const demonyms = ((_b = (_a = country.demonyms) === null || _a === void 0 ? void 0 : _a.eng) === null || _b === void 0 ? void 0 : _b.m) || 'Not available';
    countryCurrencyElement.innerHTML = `<strong>Currency:</strong> ${currency.name}`;
    countryLanguageElement.innerHTML = `<strong> Language: </strong> ${language}`;
    countryDemonymElement.innerHTML = `<strong> Demonym: </strong> ${demonyms}`;
}
