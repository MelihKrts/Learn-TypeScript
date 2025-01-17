let countryInput = document.querySelector(".search-input") as HTMLInputElement
let countryNameElement = document.querySelector(".country-name") as HTMLElement
let countryFlagElement = document.querySelector(".country-flag") as HTMLImageElement
let countryPopulation = document.getElementById("population") as HTMLParagraphElement

let countryCapitalElement = document.getElementById("capital") as HTMLParagraphElement

let countryRegionElement = document.getElementById("region") as HTMLParagraphElement

let countryCurrencyElement = document.getElementById("currency") as HTMLParagraphElement

let countryLanguageElement = document.getElementById("language") as HTMLParagraphElement

let countryDemonymElement = document.getElementById("demonym") as HTMLParagraphElement

countryInput?.addEventListener("input", (e: Event) => {
    const target = e.target as HTMLInputElement
    let searchValue = target.value
    if (!searchValue) return

    // Önce tam eşleşme dene
    const exactURL = `https://restcountries.com/v3.1/name/${searchValue}?fullText=true`
    fetch(exactURL)
        .then((response) => response.json())
        .then((data: any[]) => {
            if (data.length > 0) {
                updateCountryInfo(data[0])
            } else {

                const partialURL = `https://restcountries.com/v3.1/name/${searchValue}`
                return fetch(partialURL)
                    .then((response) => response.json())
                    .then((data: any[]) => {
                        if (data.length > 0) {
                            updateCountryInfo(data[0])
                        }
                    })
            }
        })
        .catch(error => console.error("Error fetching data", error))
})

function updateCountryInfo(country: any) {
    countryNameElement.innerHTML = country.name.common
    countryFlagElement.src = country.flags.png
    countryFlagElement.alt = country.flags.alt

    const formattedPopulation = new Intl.NumberFormat().format(country.population)

    countryPopulation.innerHTML = `<strong>Population:</strong> ${formattedPopulation}`
    countryCapitalElement.innerHTML = `<strong>Capital: </strong> ${country.capital}`
    countryRegionElement.innerHTML = `<strong> Region: </strong> ${country.region}`

    const currency = Object.values(country.currencies) as any
    countryCurrencyElement.innerHTML = `<strong>Currency:</strong> ${currency.name}`

    const language = Object.values(country.languages) as any
    const demonyms = country.demonyms?.eng?.m || 'Not available'


    countryLanguageElement.innerHTML = `<strong> Language: </strong> ${language}`
    countryDemonymElement.innerHTML = `<strong> Demonym: </strong> ${demonyms}`
    console.log(country);
}


