'use strict'

var hours = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12am',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
];

var pikeUl = Document.getElementById('pike');
var seaTacUl = Document.getElementById('seatac');
var seaCenterUl = Document.getElementById('seaCenter');
var capHillUl = Document.getElementById('CapHill');
var alkiUl = Document.getElementById('alki');


var pikes = {
    location: 'Pikes',
    max: 65,
    min: 23,
    avg: 6.3,
}
function getRandom() {
    console.log(answer);
    return Math.random() * (max - min) + min;
}