// This one is for Smooth scroll to content when the "scroll down" link  is clicked
document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
});

// Parallax effect for the background
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.pageYOffset;

    // Adjust the speed of the parallax effect
    parallax.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});
