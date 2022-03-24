// Toggle mobile nav menu on click
function toggleMenu() {
  var barMenu = document.getElementById("mobileLinks");
  if (barMenu.style.display === "block") {
    barMenu.style.display = "none";
  } else {
    barMenu.style.display = "block";
  }
}

// Set Date in Footer
const date = document.getElementById("date");
  date.innerHTML = new Date().getFullYear(); 
