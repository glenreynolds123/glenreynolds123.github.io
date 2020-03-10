const api ='https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cb3ec5ffc2f9187132b85d95d52d9515&units=Imperial';
fetch(apiURL)
.then(
response => {
    return response.json();
}

)
.then(
    (jsObject) => {
        console.log(jsObject);
    
        document.querySelector('#current-temp')
    .textContent = jsObject.main.temp;
    let image = ' https://openweathermap.org/img/wn/' +
    jsObject.weather[0].icon + 
    '.png';
    

    document.querySelector('#weather-icon')
      .setAttribute('src', image);

      let alt = jsObject[0].description;

      document.querySelector('#weather-icon')
      .setAttribute('alt', alt);

      let weatherIcon = document.querySelector('#weather-icon');
      weatherIcon.setAttribute('src', image);
      weatherIcon.setAttribute('alt', alt);
      

    }

  );

