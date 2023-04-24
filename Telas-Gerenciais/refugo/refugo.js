
// Get the modal and button elements
var modal = document.getElementById("myModal");
var modalButton = document.getElementById("modalButton");

// Get the close button element and add a click event listener
var close = document.getElementsByClassName("close")[0];
close.addEventListener("click", function() {
  modal.classList.add("fade");
  setTimeout(function() {
    modal.style.display = "none";
    modal.classList.remove("fade");
  }, 300);
});


// Add a click event listener to the button element
modalButton.addEventListener("click", function() {
  modal.style.display = "block";
});

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function (){
    dropdown.classList.toggle('active');
}

document.addEventListener('click', function(event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});

function show(a) {
  document.querySelector('.text02').value = a;
}


var dropdown2 = document.querySelector('.dropdown2');
dropdown2.addEventListener('click', function() {
  dropdown2.classList.toggle('active2');
});

document.addEventListener('click', function(event) {
  if (!dropdown2.contains(event.target)) {
    dropdown2.classList.remove('active2');
  }
});


function show2(b) {
  document.querySelector('.text03').value = b;
}


var dropdown3 = document.querySelector('.dropdown3');
dropdown3.addEventListener('click', function() {
  dropdown3.classList.toggle('active3');
});

document.addEventListener('click', function(event) {
  if (!dropdown3.contains(event.target)) {
    dropdown3.classList.remove('active3');
  }
});


function show3(c) {
  document.querySelector('.text04').value = c;
}


var dropdown4 = document.querySelector('.dropdown4');
dropdown4.addEventListener('click', function() {
  dropdown4.classList.toggle('active4');
});

document.addEventListener('click', function(event) {
  if (!dropdown4.contains(event.target)) {
    dropdown4.classList.remove('active4');
  }
});


function show4(d) {
  document.querySelector('.text05').value = d;
}

var dropdown5 = document.querySelector('.dropdown5');
dropdown5.addEventListener('click', function() {
  dropdown5.classList.toggle('active5');
});

document.addEventListener('click', function(event) {
  if (!dropdown5.contains(event.target)) {
    dropdown5.classList.remove('active5');
  }
});


function show5(e) {
  document.querySelector('.text06').value = e;
}

var dropdown6 = document.querySelector('.dropdown6');
dropdown6.addEventListener('click', function() {
  dropdown6.classList.toggle('active6');
});

document.addEventListener('click', function(event) {
  if (!dropdown6.contains(event.target)) {
    dropdown6.classList.remove('active6');
  }
});


function show6(f) {
  document.querySelector('.text07').value = f;
}


