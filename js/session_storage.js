
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
function checkTheme() {

    if (localStorage.getItem("mode") == "funder") {
        funderTheme(); //if funder mode was on, run this function
      } else if (localStorage.getItem("mode") == "academic") {
        academicTheme(); //if academic mode was on, run this function
      } else if (localStorage.getItem("mode") == "practitioner") {
        practitionerTheme(); //if practitioner mode was on, run this function
      } else if (localStorage.getItem("mode") == "student") {
        studentTheme(); //if student mode was on, run this function
      } else {
        exploreTheme(); //else run this function
      }
    
    }


function funderTheme() { 
    console.log("funderTheme active");
    localStorage.setItem("mode", "funder");
    document.getElementById("Academic").className = "regular-button-blue";
    document.getElementById("Practitioner").className = "regular-button-blue";
    document.getElementById("Student").className = "regular-button-blue";
    document.getElementById("Explore").className = "regular-button-blue";
};

// Checking to see if the buttons work
function academicTheme() { 
    console.log("academicTheme active");
    document.getElementById("Academic").className = "mode-active";
    localStorage.setItem("mode", "academic");
    document.getElementById("Funder").className = "regular-button-blue";
    document.getElementById("Practitioner").className = "regular-button-blue";
    document.getElementById("Student").className = "regular-button-blue";
    document.getElementById("Explore").className = "regular-button-blue";
};

// Checking to see if the buttons work
function practitionerTheme() { 
    console.log("practitionerTheme active"); 
    document.getElementById("Practitioner").className = "mode-active";
    localStorage.setItem("mode", "practitioner");
    document.getElementById("Funder").className = "regular-button-blue";
    document.getElementById("Academic").className = "regular-button-blue";
    document.getElementById("Student").className = "regular-button-blue";
    document.getElementById("Explore").className = "regular-button-blue";
};

// Checking to see if the buttons work
function studentTheme() { 
    console.log("studentTheme active");  
    document.getElementById("Student").className = "mode-active";
    localStorage.setItem("mode", "student");
    document.getElementById("Funder").className = "regular-button-blue";
    document.getElementById("Academic").className = "regular-button-blue";
    document.getElementById("Practitioner").className = "regular-button-blue";
    document.getElementById("Explore").className = "regular-button-blue";
};

// Checking to see if the buttons work
function exploreTheme() { 
    console.log("exploreTheme active");  
    document.getElementById("Explore").className = "mode-active";
    localStorage.setItem("mode", "explore");
    document.getElementById("Funder").className = "regular-button-blue";
    document.getElementById("Academic").className = "regular-button-blue";
    document.getElementById("Practitioner").className = "regular-button-blue";
    document.getElementById("Student").className = "regular-button-blue";
};