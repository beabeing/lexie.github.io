document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'block';
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
});

var mainImage = document.getElementById('flow-image');
mainImage.addEventListener('mouseenter', function() {
    mainImage.style.animationPlayState = 'paused';
});
mainImage.addEventListener('mouseleave', function() {
    mainImage.style.animationPlayState = 'running';
});