const button_one = document.getElementById('button-mobile')
const navbar = document.getElementById('mobile-nav')
let isOpen = false; // Variable para rastrear el estado del menú

button_one.addEventListener('click', function () {
  if (isOpen) {
    // Si el menú está abierto, ciérralo
    navbar.style.display = 'none';
    isOpen = false;
  } else {
    // Si el menú está cerrado, ábrelo
    navbar.style.display = 'flex';
    isOpen = true;
  }
});

const user_img = document.getElementById('imagepp');
const button_img = document.getElementById('modify-pp');

user_img.addEventListener('mouseover', function() {
    button_img.style.display = "inline-block";

});

user_img.addEventListener('mouseout', function(event) {
  if (!user_img.contains(event.relatedTarget) && !button_img.contains(event.relatedTarget)) {
    button_img.style.display = "none";
}
});
