// import $ from "jquery";

// export const hello = (name) => {
//     return `hello ${name}`;
//     console.log('yei');
// };

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    document.getElementById("demo").innerText = "hola";
});
x();

