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
    document.getElementById("ctaOne").innerHTML = '<div class="cta">Funder mode on!</div>';
    document.getElementById("ctaTwo").innerHTML = '<div class="cta">Funder mode on!</div>';
    console.log("Funder mode on!");
  }


//Once Academic selection on homepage is made, run this function
  //Be sure to rename all cta with unique IDs
  //Update each unique ID with call to action text, replacing the text Funder mode is on!
function academicMode() {
    document.getElementById("ctaOne").innerHTML = '<div class="cta">Academic mode on!</div>';
    document.getElementById("ctaTwo").innerHTML = '<div class="cta">Academic mode on!</div>';
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