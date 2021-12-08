let name = document.querySelector(`#myName`);
let currentDate = document.querySelector(`#myClock`);

name.innerHTML = prompt("Please Enter Your Name: ");

let d = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[d.getDay()];

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    currentDate.innerHTML = h + ":" + m + ":" + s + " " + n;
    t = setTimeout(function() {
      startTime()
    }, 500);
}
startTime();