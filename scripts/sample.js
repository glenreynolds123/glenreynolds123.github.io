document.querySelector('#current-temp').innerHTML = '50&deg;';
document.querySelector('#current-temp').innerHTML = '10mph;';
document.querySelector( '#humidity').innerHTML = '10&percnt';

const currentDate = new Date();
const aside = document.querySelector('aside');
if (currentDate.getDate()=== 5) {
    //aside.style.display = 'block';//
    aside.classList.remove('hidden');
} else {
    //aside.style.display ='none';
    //aside.classList.add('hidden');
}

if (currentDate.getDay()  !==5  ) {
    aside.classList.add('hidden');
}

let f, t, s;
t = 50;
s = 50;

f = 35.74 + 0.6215 * t -35.75 * Math.pow(s, 0.16) + 0.4275 * t  * Math.pow(s, 16);
document.querySelector('WindChill').innerHTML = f.toFixed(2);
if () {
   f =35.74 + 0.6215 * t -35.75 * Math.pow(s, 0.16) + 0.4275 * t  * Math.pow(s, 16);
} else {
 f ='N/A';
}


document.querySelector('WindChill').innerHTML = f;


document.querySelector('currentTemp').innerHTML ='${t}&deg';
document.querySelector('#wind-speed').innerHTML = s + 'mph';

const currentDate = new Date();
const aside = document.querySelector('aside');
if(currentDate.getDay() === 4) {
    aside.classList.remove('hidden');
}

Webfont.load({})
google; {
    families: {
        'Siracha'
    }
}

    











document.querySelector('#current-temp').innerHTML = t + '&deg;' // '50&deg;';
document.querySelector('#current-temp').innerHTML =  s + 'mph';//'10mph;'
document.querySelector( '#humidity').innerHTML =  f + '&deg';//'10&percnt';
