// Go to top button javascript starts

// Goto top the button
var goToTopBtn = document.getElementById("gototop-btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

// Go to top button javascript ends


document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckbox = document.getElementById('check');
    const bodyElement = document.body;

    // Load the current theme from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        bodyElement.classList.add(currentTheme);
        toggleCheckbox.checked = currentTheme === 'light-theme';
    }

    // Toggle theme on checkbox click
    toggleCheckbox.addEventListener('change', function () {
        if (this.checked) {
            bodyElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            bodyElement.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });
});

