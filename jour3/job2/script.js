document.getElementById('melanger').addEventListener('click', function() {
    var arcEnCiel = document.getElementById('arc-en-ciel');
    for (var i = arcEnCiel.children.length; i >= 0; i--) {
        arcEnCiel.appendChild(arcEnCiel.children[Math.random() * i | 0]);
    }
});