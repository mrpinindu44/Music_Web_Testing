// Add this function in your script.js file
function openPopup() {
   document.getElementById("popup").style.display = "flex";
}

function closePopup() {
   document.getElementById("popup").style.display = "none";
}

// Add an event listener to your signup button
document.getElementById("SubmitButton2").addEventListener("click", openPopup);
