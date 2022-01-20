// scroll
ScrollReveal().reveal('.show', { delay: 900 });

ScrollReveal({ reset: true });

window.onload = function () { document.body.scrollTop = document.documentElement.scrollTop = 0; };



// navbar
function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}

// lien a navbar
var Close = document.querySelectorAll('.fermer');

Close.forEach(function (swipeup) {
    swipeup.addEventListener('click', function () {
        nav.classList.toggle("active")
        toggle.classList.toggle("active")
    })

})

// Progress bar competence

var six = document.querySelectorAll('.lesbarres');
var quatre = document.querySelectorAll('.lesbarres2');
var cinq = document.querySelectorAll('.lesbarres3');

addEventListener('scroll', function () {
    if (window.scrollY >= 1175) {
        six.forEach(function (a) {
            a.classList.add('progress-value1');
        })
        quatre.forEach(function (b) {
            b.classList.add('progress-value2');
        })
        cinq.forEach(function (c) {
            c.classList.add('progress-value3');
        })

    }
})
