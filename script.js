document.getElementById("home-button").addEventListener("click", function() {
  // Scroll the page to the element with ID "section2"
  document.getElementById("home-section").scrollIntoView();
});

document.getElementById("services-button").addEventListener("click", function() {
  // Scroll the page to the element with ID "section2"
  document.getElementById("services-section").scrollIntoView();
});

document.getElementById("random-sells-button").addEventListener("click", function() {
  // Scroll the page to the element with ID "section2"
  document.getElementById("random-sells-section").scrollIntoView();
});

document.getElementById("contact-button").addEventListener("click", function() {
  // Scroll the page to the element with ID "section2"
  document.getElementById("contact-section").scrollIntoView();
});

function showAlert() {
  document.querySelector('.alert-container').style.display = 'flex';
}

function hideAlert() {
  document.querySelector('.alert-container').style.display = 'none';
}
