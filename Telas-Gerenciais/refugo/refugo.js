
// Get the modal and button elements
var modal = document.getElementById("myModal");
var modalButton = document.getElementById("modalButton");

// Get the close button element and add a click event listener
var close = document.getElementsByClassName("close")[0];
close.addEventListener("click", function() {
  modal.style.display = "none";
});

// Add a click event listener to the button element
modalButton.addEventListener("click", function() {
  modal.style.display = "block";
});

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function (){
    dropdown.classList.toggle('active');
}

function show(a){
    document.querySelector('.text02').value = a;
}

