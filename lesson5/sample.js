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