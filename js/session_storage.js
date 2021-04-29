
//Menu functions
function openMenu() {
  document.getElementById("sideMenu").style.width = "25em";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

//Self selection elements and Functions

const classList = ["funder-mode", "academic-mode", "practitioner-mode", "student-mode"];


//Get the button variables
const funder = document.getElementById("Funder"); // Accessing The Button // 
funder.addEventListener("click", funderTheme); // Adding event to call function when clicked // 

const academic = document.getElementById("Academic"); // Accessing The Button // 
academic.addEventListener("click", academicTheme); // Adding event to call function when clicked // 

const practitioner = document.getElementById("Practitioner"); // Accessing The Button // 
practitioner.addEventListener("click", practitionerTheme); // Adding event to call function when clicked // 

const student = document.getElementById("Student"); // Accessing The Button // 
student.addEventListener("click", studentTheme); // Adding event to call function when clicked // 

const explore = document.getElementById("Explore"); // Accessing The Button // 
explore.addEventListener("click", exploreTheme); // Adding event to call function when clicked // 



// //check storage if funder mode was on or off
// function checkTheme() {

// if (sessionStorage.getItem("mode") == "funder") {
//     funderTheme(); //if funder mode was on, run this function
//   } else if (sessionStorage.getItem("mode") == "academic") {
//     academicTheme(); //if funder mode was on, run this function
//   } else if (sessionStorage.getItem("mode") == "practitioner") {
//     practitionerTheme(); //if funder mode was on, run this function
//   } else if (sessionStorage.getItem("mode") == "student") {
//     studentTheme(); //if funder mode was on, run this function
//   } else {
//     exploreTheme(); //else run this function
//   }

// }


// Checking to see if the buttons work
// function funderTheme() { 
//     console.log("funderTheme active");
//     document.getElementById("modeExplainer").innerHTML = '<p>Funder mode on!<p>';
//     document.getElementById("Funder").className = "mode-active";
//     sessionStorage.setItem("mode", "funder");
// };


function funderTheme() { 
    console.log("funderTheme active");
    document.getElementById("Funder").className = "mode-active";
    sessionStorage.setItem("mode", "funder");
    document.getElementById("Academic").className = "regular-button-blue";
    document.getElementById("Practitioner").className = "regular-button-blue";
    document.getElementById("Student").className = "regular-button-blue";
    document.getElementById("Explore").className = "regular-button-blue";
};

// Checking to see if the buttons work
function academicTheme() { 
    console.log("academicTheme active");
    document.getElementById("Academic").className = "mode-active";
    sessionStorage.setItem("mode", "academic");
    document.getElementById("Funder").className = "regular-button-blue";
    document.getElementById("Practitioner").className = "regular-button-blue";
    document.getElementById("Student").className = "regular-button-blue";
    document.getElementById("Explore").className = "regular-button-blue";
};

// Checking to see if the buttons work
function practitionerTheme() { 
    console.log("practitionerTheme active"); 
    document.getElementById("Practitioner").className = "mode-active";
    sessionStorage.setItem("mode", "practitioner");
    document.getElementById("Funder").className = "regular-button-blue";
    document.getElementById("Academic").className = "regular-button-blue";
    document.getElementById("Student").className = "regular-button-blue";
    document.getElementById("Explore").className = "regular-button-blue";
};

// Checking to see if the buttons work
function studentTheme() { 
    console.log("studentTheme active");  
    document.getElementById("Student").className = "mode-active";
    sessionStorage.setItem("mode", "student");
    document.getElementById("Funder").className = "regular-button-blue";
    document.getElementById("Academic").className = "regular-button-blue";
    document.getElementById("Practitioner").className = "regular-button-blue";
    document.getElementById("Explore").className = "regular-button-blue";
};

// Checking to see if the buttons work
function exploreTheme() { 
    console.log("exploreTheme active");  
    document.getElementById("Explore").className = "mode-active";
    sessionStorage.setItem("mode", "explore");
    document.getElementById("Funder").className = "regular-button-blue";
    document.getElementById("Academic").className = "regular-button-blue";
    document.getElementById("Practitioner").className = "regular-button-blue";
    document.getElementById("Student").className = "regular-button-blue";
};