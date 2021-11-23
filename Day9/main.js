
function startTimer(){
var now = new Date().getTime();
const d = new Date('December 17, 1995 00:25:00');
d.setTime(now);
let m = d.getMinutes() + 1;
d.setMinutes(m);

document.body.style.backgroundColor = "red";
document.getElementById("state").innerHTML = "WORK!";
let buton = document.getElementById("buton");
buton.style.visibility = "hidden";

var x = setInterval(function() {
    var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = d.getTime() - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =  minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    document.getElementById("demo").innerHTML = "";
    clearInterval(x);
    breakTime();
  }
}, 1000);
}

function breakTime(){
    var now = new Date().getTime();
    const d = new Date('December 17, 1995 00:25:00');
    d.setTime(now);
    let m = d.getMinutes() + 5;
    d.setMinutes(m);
    document.body.style.backgroundColor = "green";
    document.getElementById("state").innerHTML = "REST!";
    var x = setInterval(function() {
        var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = d.getTime() - now;
    
      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML =  minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text
      if (distance < 0) {
        document.getElementById("demo").innerHTML = "";
        clearInterval(x);
        startTimer();
        
      }
    }, 1000);
}