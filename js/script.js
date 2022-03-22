/* Toggle the mobile nav menu links when user clicks bar icon */
function toggleMenu() {
  var barMenu = document.getElementById("mobileLinks");
  if (barMenu.style.display === "block") {
    barMenu.style.display = "none";
  } else {
    barMenu.style.display = "block";
  }
}
