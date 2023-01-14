// import patterns from './patterns';

// function launchPattern(pattern) {
//     if (typeof pattern === 'function') {
//         tryCatch(pattern);
//     } else if (pattern.launchQuery) {
//         const { launchFn, launchQuery } = pattern;
//         Array.from(document.querySelectorAll(launchQuery))
//             .filter((elem) => elem.className.indexOf(`${launchQuery}-no-js`))
//             .forEach((elem) => tryCatch(() => launchFn(elem)));
//     }
// }

// document.addEventListener(
//     'DOMContentLoaded',
//     () => {
//         patterns.forEach(launchPattern);
//     },
//     false
// );

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    document.getElementById("demo").innerText = "hola";
});
x();

