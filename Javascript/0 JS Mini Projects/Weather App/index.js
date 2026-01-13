// IDs 

//  Weather Search
const search = document.querySelector(".weather_search");
const searchBox = document.querySelector(".searchBox");

// Weather body
const cityName = document.querySelector(".weather_cityName");
const dateAndTime = document.querySelector(".weather_dateTime");

const wForecast = document.querySelector(".weather_forecast");
const wIcon = document.querySelector(".Weather_icon");

const wTemp = document.querySelector(".weather_temperature");

const wMin = document.querySelector(".weather_min");
const wMax = document.querySelector(".weather_max");

// Weather Cards!
const feelsLike = document.querySelector(".weather_feelsLike");
const humdity = document.querySelector(".weather_humidity");
const W_wind = document.querySelector(".weather_wind");
const pressure = document.querySelector(".weather_pressure");

let city = "delhi";

// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}
// api Key: 8f7c1f153896264a6e5aefb11b158340


// search functionality
search.addEventListener('submit', (e) => {
    e.preventDefault();
    city = searchBox.value;
    apiWork();
    searchBox.value = '';
});


const convertCountry = (country) => {
    const regionNamesInEnglish = new Intl.DisplayNames([country], { type: "region" });
    return (regionNamesInEnglish.of(country));
}

const convertTime = (dt) => {
    let curDate = new Date(dt*1000);

    let DateObject = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    }

    const formatter = new Intl.DateTimeFormat("en-US", DateObject);
    return formatter.format(curDate);

}

const apiWork = async () => {
    const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31143f5f8a7b2e81fc86e1caa49a4980`;

    try{
        const res = await fetch(apiKey);
        const data = await res.json();
        console.log(data);

        const {main, name, weather, wind, sys, dt} = data;
        
        cityName.innerHTML = `${name}, ${convertCountry(sys.country)}`;
        dateAndTime.innerHTML = `${convertTime(dt)}`;

        wForecast.innerHTML = weather[0].main;
        wIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">`;

        wTemp.innerHTML = `${main.temp}&#176`;
        wMin.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
        wMax.innerHTML = `Max: ${main.temp_min.toFixed()}&#176`;

        feelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
        humdity.innerHTML = `${main.humidity}%`;
        W_wind.innerHTML = `${wind.speed} m/s`;
        pressure.innerHTML = `${main.pressure} hPa`;


    }
    catch(error){
        console.log(error);
    }


}

apiWork();