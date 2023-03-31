/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//
<!--
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




window.onload=function()
{

var request = new XMLHttpRequest();
var hpath = "http://api.weatherapi.com/v1/current.json?key=cf2e62adf3c749bd8bc72210210412&q=Valletta&aqi=no";
var jsonWeather;

request.open("GET",hpath,false);

request.send();

jsonWeather = JSON.parse(request.responseText);

//var temp=jsonWeather.current.condition.icon;
var icon =jsonWeather.current.condition.icon;
var weather ="The current weather in Haz-Zebbug is "+ jsonWeather.current.condition.text;
var temp ="The temperature is  "+ jsonWeather.current.temp_c+" Cel";
var feelstemp="However, the temperature feels like "+jsonWeather.current.feelslike_c+" Cel";
var winddirection="The wind direction is "+jsonWeather.current.wind_dir;
var humidity="The humidity is "+jsonWeather.current.humidity+" %";
var last_updated="Last updated at "+jsonWeather.current.last_updated;


document.getElementById("weatherimage").src="http:"+icon;
var newline=("<br><br>");
var ret =weather+newline+temp+newline+feelstemp+newline+winddirection+newline+humidity+newline+last_updated;
document.getElementById("text2").innerHTML=ret;

//Question 4 map

var map = L.map('map').setView([35.8718649615445, 14.441464118299564], 18);
var marker = L.marker([35.8718649615445, 14.441464118299564]).addTo(map);
marker.bindPopup("<b>Haz-Zebbug</b>").openPopup();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGhpYXNiYXJ0b2xvIiwiYSI6ImNrd3g3cnd0cjBia3gycHF0ZW1lNWd1cnYifQ.d2hQgfxhR_USIsaM-ip7Iw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom:2,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

var request2 = new XMLHttpRequest();
var spath = "http://api.geonames.org/findNearbyWikipediaJSON?lat=35.8718649615445&lng=14.441464118299564&username=matthiasbartolo";
var jsonmarkers;

request2.open("GET",spath,false);

request2.send();

jsonmarkers = JSON.parse(request2.responseText);

console.log(jsonmarkers)

for(var i=1; i<5;i++){
    let lat = jsonmarkers.geonames[i].lat;
    let long = jsonmarkers.geonames[i].lng;
    var title =jsonmarkers.geonames[i].title;
    var marker2 = L.marker([lat,long]).addTo(map);
    marker2.bindPopup(title);
  }
}




// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

-->
