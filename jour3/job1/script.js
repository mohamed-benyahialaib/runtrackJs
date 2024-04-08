const showButton = document.getElementById('showButton');
const hideButton = document.getElementById('hideButton');

const citation = document.getElementById('citation');

showButton.addEventListener('click', function() {
  citation.style.display = 'block';
});

hideButton.addEventListener('click', function() {
  citation.style.display = 'none';
});