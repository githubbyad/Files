window.onbeforeunload = function() {
  return false;
}

var anchorLinks = document.querySelectorAll('a');

// Loop through each anchor element
anchorLinks.forEach(function(anchor) {
  // Add an event listener to prevent default behavior (navigation)
  anchor.addEventListener('click', function(event) {
    // Prevent the default action (navigation)
    event.preventDefault();
  });
});
