//Menu functions
function openMenu() {
  document.getElementById("sideMenu").style.width = "25em";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}



//Sticky nav function

window.onscroll = function () {
  stickyFunction();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



//Self selection elements and Functions

const classList = ["funder-mode", "academic-mode", "practitioner-mode", "student-mode"];

//check storage for which mode was toggled on or off
if (sessionStorage.getItem("mode") == "funder") {
    funderMode(); //if funder mode was on, run this function
  } else if (sessionStorage.getItem("mode") == "academic") {
    academicMode(); //if funder mode was on, run this function
  } else if (sessionStorage.getItem("mode") == "practitioner") {
    practitionerMode(); //if funder mode was on, run this function
  } else if (sessionStorage.getItem("mode") == "student") {
    studentMode(); //if funder mode was on, run this function
  } else {
    exploreMode(); //else run this function
  }
  
//Once Funder selection on homepage is made, run this function
  //Be sure to rename all cta with unique IDs
  //Update each unique ID with call to action text, replacing the text Funder mode is on!

  function funderMode() {
    //If the URL contains the word 'capacity', use these CTAs
  if (window.location.pathname.match('capacity')) {
    document.getElementById("capacityOne").innerHTML = '<div class="cta">Funder mode on!</div>';
    document.getElementById("capacityTwo").innerHTML = '<div class="cta">Funder mode on!</div>';
    } 
    //If the URL contains the word 'circular', use these CTAs
    else if (window.location.pathname.match('circular')) {
    document.getElementById("circularOne").innerHTML = '<div class="cta">Funder mode on!</div>';
    document.getElementById("circularTwo").innerHTML = '<div class="cta">Funder mode on!</div>';
    }
    //If the URL contains the word 'cities', use these CTAs
    else if (window.location.pathname.match('cities')) {
    document.getElementById("citiesOne").innerHTML = '<div class="cta">Funder mode on!</div>';
    document.getElementById("citiesTwo").innerHTML = '<div class="cta">Funder mode on!</div>';
    } 
    //If the URL contains the word 'climate', use these CTAs
    else if (window.location.pathname.match('climate')) {
      document.getElementById("climateOne").innerHTML = '<div class="cta">Funder mode on!</div>';
      document.getElementById("climateTwo").innerHTML = '<div class="cta">Funder mode on!</div>';
    }
    //If the URL contains the word 'health', use these CTAs
    else if (window.location.pathname.match('health')) {
      document.getElementById("healthOne").innerHTML = '<div class="cta">Funder mode on!</div>';
      document.getElementById("healthTwo").innerHTML = '<div class="cta">Funder mode on!</div>';
    }
    //If the URL contains the word 'inclusive', use these CTAs
    else if (window.location.pathname.match('inclusive')) {
      document.getElementById("inclusiveOne").innerHTML = '<div class="cta">Funder mode on!</div>';
      document.getElementById("inclusiveTwo").innerHTML = '<div class="cta">Funder mode on!</div>';
    } 
    //If the URL contains the word 'leadership', use these CTAs
    else if (window.location.pathname.match('leadership')) {
    document.getElementById("leadershipOne").innerHTML = '<div class="cta">Funder mode on!</div>';
    document.getElementById("leadershipTwo").innerHTML = '<div class="cta">Funder mode on!</div>';
    }
    console.log("Funder mode on!");
  }


//Once Academic selection on homepage is made, run this function
  //Be sure to rename all cta with unique IDs
  //Update each unique ID with call to action text, replacing the text Funder mode is on!
function academicMode() {
    //If the URL contains the word 'capacity', use these CTAs
  if (window.location.pathname.match('capacity')) {
    document.getElementById("capacityOne").innerHTML = '<div class="cta">Academic mode on!</div>';
    document.getElementById("capacityTwo").innerHTML = '<div class="cta">Academic mode on!</div>';
    } 
    //If the URL contains the word 'circular', use these CTAs
    else if (window.location.pathname.match('circular')) {
    document.getElementById("circularOne").innerHTML = '<div class="cta">Academic mode on!</div>';
    document.getElementById("circularTwo").innerHTML = '<div class="cta">Academic mode on!</div>';
    }
    //If the URL contains the word 'cities', use these CTAs
    else if (window.location.pathname.match('cities')) {
    document.getElementById("citiesOne").innerHTML = '<div class="cta">Academic mode on!</div>';
    document.getElementById("citiesTwo").innerHTML = '<div class="cta">Academic mode on!</div>';
    } 
    //If the URL contains the word 'climate', use these CTAs
    else if (window.location.pathname.match('climate')) {
      document.getElementById("climateOne").innerHTML = '<div class="cta">Academic mode on!</div>';
      document.getElementById("climateTwo").innerHTML = '<div class="cta">Academic mode on!</div>';
    }
    //If the URL contains the word 'health', use these CTAs
    else if (window.location.pathname.match('health')) {
      document.getElementById("healthOne").innerHTML = '<div class="cta">Academic mode on!</div>';
      document.getElementById("healthTwo").innerHTML = '<div class="cta">Academic mode on!</div>';
    }
    //If the URL contains the word 'inclusive', use these CTAs
    else if (window.location.pathname.match('inclusive')) {
      document.getElementById("inclusiveOne").innerHTML = '<div class="cta">Academic mode on!</div>';
      document.getElementById("inclusiveTwo").innerHTML = '<div class="cta">Academic mode on!</div>';
    } 
    //If the URL contains the word 'leadership', use these CTAs
    else if (window.location.pathname.match('leadership')) {
    document.getElementById("leadershipOne").innerHTML = '<div class="cta">Academic mode on!</div>';
    document.getElementById("leadershipTwo").innerHTML = '<div class="cta">Academic mode on!</div>';
    }
    console.log("Academic mode on");
  } 

//Once Practitioner selection on homepage is made, run this function
  //Be sure to rename all cta with unique IDs
  //Update each unique ID with call to action text, replacing the text Funder mode is on!
function practitionerMode() {
    document.getElementById("ctaOne").innerHTML = '<div class="cta">Practitioner mode on!</div>';
    document.getElementById("ctaTwo").innerHTML = '<div class="cta">Practitioner mode on!</div>';
    console.log("practitioner mode on");
  }

//Once Student selection on homepage is made, run this function
  //Be sure to rename all cta with unique IDs
  //Update each unique ID with call to action text, replacing the text Funder mode is on!
function studentMode() {
    document.getElementById("ctaOne").innerHTML = '<div class="cta">Student mode on!</div>';
    document.getElementById("ctaTwo").innerHTML = '<div class="cta">Student mode on!</div>';
    console.log("Student mode on");
  } 
  
//function for checkbox when checkbox is not checked
  //Be sure to rename all cta with unique IDs
  //Update each unique ID with call to action text, replacing the text Funder mode is on!
function exploreMode() {
    sessionStorage.setItem("mode", "explore"); //store a name & value to know that dark mode is off or light mode is on
    document.getElementById("ctaOne").innerHTML = '<div class="cta">Explore mode on!</div>';
    document.getElementById("ctaTwo").innerHTML = '<div class="cta">Explore mode on!</div>';
    console.log("Explore mode on");
  } 