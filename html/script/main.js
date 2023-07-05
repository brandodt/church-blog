// ANIMATION

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Restrict input to only numeric values
document.getElementById('phone-input').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});

// Prevent clearing of input on non-numeric keypress
document.getElementById('phone-input').addEventListener('keypress', function (e) {
    if (isNaN(e.key)) {
        e.preventDefault();
    }
});