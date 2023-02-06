/// Date count down

var countDownDate = new Date("August 11, 2023").getTime();
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime(); // Find the distance between now and the count down date

  var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TODAY!";
  } else {
    document.getElementById("countdown").innerText = days + " days to go";
  }
});

/// gallery

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");

	if (n > slides.length) {slideIndex = 1}    

	if (n < 1) {slideIndex = slides.length}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}
 
