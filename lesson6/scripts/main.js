const currentDate = new Date();
const aside = document.querySelector('aside');
if (currentDate.getDate() === 5) {
    //aside.style.display = 'block';//
    aside.classList.remove('hidden');
} else {
    //aside.style.display ='none';
    //aside.classList.add('hidden');
}

if (currentDate.getDay() !== 5) {
    aside.classList.add('hidden');
}

WebFont.load({
    google: {
        families: [
            'Roboto'
        ]
    }
});
