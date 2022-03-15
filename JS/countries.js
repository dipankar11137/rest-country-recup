
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    // console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHtml(country));
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
    console.log(allCountriesHTML[0]);
}

const getCountryHtml = country => {
    return `
        <div class="country">
            <img src="${country.flags.png}" alt="">
            <h2>${country.name.common}</h2>
        </div>
    `
}

loadCountries();