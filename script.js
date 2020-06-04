//Challenge 1: Your Age In Days
function ageInDays(){   
var birthYear = prompt('What Year where You Born... Good Friend?');
var ageInDayss = (2020 - birthYear) * 365;
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode('You Are ' + ageInDayss + ' days old.');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
//console.log(ageInDayss);
}

function reset(){
    document.getElementById('ageInDays').remove();
}