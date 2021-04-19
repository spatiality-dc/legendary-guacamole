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

//check storage if funder mode was on or off
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
  
  //function for storing session data choice
  function funderMode() {
    document.getElementById("cta").innerHTML = '<div class="cta">Funder mode on!</div>';
    console.log("Funder mode on!");
  }


//function for storing session data choice
function academicMode() {
    document.getElementById("cta").innerHTML = '<div class="cta">Academic mode on!</div>';
    console.log("Academic mode on");
  } 

//function for storing session data choice
function practitionerMode() {
    document.getElementById("cta").innerHTML = '<div class="cta">Practitioner mode on!</div>';
    console.log("practitioner mode on");
  }

//function for storing session data choice
function studentMode() {
    document.getElementById("cta").innerHTML = '<div class="cta">Student mode on!</div>';
    console.log("Student mode on");
  } 
  
//function for checkbox when checkbox is not checked
function exploreMode() {
  // document.getElementById("cta").remove(...classList); //remove added class from body tag
    sessionStorage.setItem("mode", "explore"); //store a name & value to know that dark mode is off or light mode is on
    document.getElementById("cta").innerHTML = '<div class="cta">Explore mode on!</div>';
    console.log("Explore mode on");
  } 