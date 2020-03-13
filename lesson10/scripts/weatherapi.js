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

        let t = jsObject.main.temp;
        let s = jsObject.wind.speed;
        let f = 0;
        
      
        
        if (t <= 50 && s >= 3) {
            f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
            document.querySelector('#wind-chill').innerHTML = f.toFixed(0) + '&deg;';
        } else {
            f = 'N/A';
            document.querySelector('#wind-chill').innerHTML = f;
        }
        
        document.querySelector('#current-temp').innerHTML = `${t}&deg;`;
        document.querySelector('#wind-speed').innerHTML = s + 'mph';
        
    
    
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


const apiUrlForecast =""

  fetch(apiUrlForecast)
  .then(response => response.json())
  .then(
    jsObject => {
  jsObject.list.forEach(
forecast => {
   if(forecast.dt_txt.includes('18.00')) {
     let forecastDate = new Date (forecast.dt_txt.replace('','T'));
     let dayOfWeek = daysOfWeek[forecastDate.getDay()];
     
     document.getElement
   }
   }

}


  )


    }


  )

