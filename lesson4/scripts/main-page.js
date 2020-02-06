/* Wednesday, 30 January 2020 */

let currentDate = new Date();

/* Declare data variable */
let fullDate;


/* day of week */

let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',

];

/* Assigns a number*/
let dayOfWeek = currentDate.getDay();

fullDate =daysOfWeek[dayOfWeek];


/* Date of month */
let dayOfMonth = currentDate.getDate();

fullDate += ', ' + dayOfMonth;

console.log(fullDate);


let months =[
    'January',
    'February',
    'March',
    'April',
     'May',
     'June',
     'July',
     'August',
     'September',
     'October',
     'November',
     'December',




];

fullDate += ' ' + months[currentDate.getMonth()];

/* date of year */
let year = currentDate.getFullYear();
fullDate += ' ' + year;






/* full date */


document.querySelector('#current-date').textContent = fullDate;