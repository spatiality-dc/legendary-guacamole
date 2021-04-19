
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


// Checking to see if the buttons work
function funderTheme() { 
    console.log("funderTheme active");
    document.getElementById("modeExplainer").innerHTML = '<p>Funder mode on!<p>';
    sessionStorage.setItem("mode", "funder");
};

// Checking to see if the buttons work
function academicTheme() { 
    console.log("academicTheme active");
    document.getElementById("modeExplainer").innerHTML = '<p>Academic mode on!<p>';
    sessionStorage.setItem("mode", "academic");
};

// Checking to see if the buttons work
function practitionerTheme() { 
    console.log("practitionerTheme active"); 
    document.getElementById("modeExplainer").innerHTML = '<p>Practitioner mode on!<p>';
    sessionStorage.setItem("mode", "practitioner");
};

// Checking to see if the buttons work
function studentTheme() { 
    console.log("studentTheme active");  
    document.getElementById("modeExplainer").innerHTML = '<p>Student mode on!<p>';
    sessionStorage.setItem("mode", "student");
};

// Checking to see if the buttons work
function exploreTheme() { 
    console.log("exploreTheme active");  
    document.getElementById("modeExplainer").innerHTML = '<p>Explore mode on!<p>';
    sessionStorage.setItem("mode", "explore");
};