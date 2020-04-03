function currentWeather(id) {
    console.log('start load')
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cb3ec5ffc2f9187132b85d95d52d9515&units=Imperial'

    fetch(apiURL)
        .then(response => response.json())
        .then(jsObject => {
            let t = jsObject.main.temp;
            let s = jsObject.wind.speed;
            let f = 0
            let imageURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
            console.log(document.querySelector(`#weather-icon-${id}`))
            document.querySelector(`#weather-icon-${id}`).setAttribute('src', imageURL);

            if (t <= 50 && s >= 3) {

                f = 35.74 + 0.6215 * t - 25.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

            } else {
                f = t;
            }
            
                document.querySelector(`#current-temp-${id}`).innerHTML = t + '&deg';
                document.querySelector(`#speed-${id}`).innerHTML = s + ' MPH';
                document.querySelector(`#windchill-${id}`).innerHTML = f.toFixed(0) + '&deg';
                document.querySelector(`#humidity-${id}`).textContent = jsObject.main.humidity + '%';


                document.querySelector(`#weatherDescription-${id}`).textContent = jsObject.weather[0].main;

            });

}

function loadWeatherData(){
    currentWeather('5511077') //reno//
    currentWeather('5506956') //lasvegas//
    currentWeather('5605242') //rexburg//
    currentWeather('5780993') //saltlakecity//
}


