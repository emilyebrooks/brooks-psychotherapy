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


//On FAQ Page - Display answer upon click

//First, grab button elements
const btns = document.querySelectorAll(".qa-button"); 
// console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function(e){
    const toggleAnswer = e.currentTarget.parentElement.parentElement; 
    console.log(toggleAnswer);
    toggleAnswer.classList.toggle("show-answer"); 
  })
})

