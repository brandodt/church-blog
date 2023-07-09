'use strict';

document.addEventListener('DOMContentLoaded', function () {

    // Dropdowns in navbar

    var $dropdowns = getAll('.navbar-item.has-dropdown:not(.is-hoverable)');

    if ($dropdowns.length > 0) {
        $dropdowns.forEach(function ($el) {
            $el.addEventListener('click', function (event) {
                event.stopPropagation();
                $el.classList.toggle('is-active');
            });
        });

        document.addEventListener('click', function (event) {
            closeDropdowns();
        });
    }

    function closeDropdowns() {
        $dropdowns.forEach(function ($el) {
            $el.classList.remove('is-active');
        });
    }

    // Close dropdowns if ESC pressed
    document.addEventListener('keydown', function (event) {
        var e = event || window.event;
        if (e.keyCode === 27) {
            closeDropdowns();
        }
    });

    // Toggles

    var $burgers = getAll('.burger');

    if ($burgers.length > 0) {
        $burgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    // Functions

    function getAll(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
});

//fade animation example class="reveal fade-in"

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

//modal for button

// Function for opening the modal
function popUp() {
    // is-active class of the modal
    document.getElementById("modal_id").classList.add("is-active");
}
// Adding event listeners for closing the modal
document.querySelectorAll(
    "#cancel"
)
    .forEach(($el) => {
        const $modal = $el.closest(".modal");

        $el.addEventListener("click", () => {
            // removing is-active class from modal
            $modal.classList.remove("is-active");
        });
    });

//modal for cards

document.querySelectorAll(".my-modal-trigger").forEach((card, index) => {
    card.addEventListener("click", () => {
        const modals = document.querySelectorAll(".my-modal");
        const modal = modals[index];
        modal.classList.add("is-active");
        document.documentElement.classList.add("is-clipped"); // Add class to <html> element
    });
});

// Adding event listeners for closing the modal
document.querySelectorAll(".modal-background, button.delete")
    .forEach((closeButton) => {
        const modal = closeButton.closest(".my-modal");

        closeButton.addEventListener("click", () => {
            modal.classList.remove("is-active");
            document.documentElement.classList.remove("is-clipped"); // Remove class from <html> element
        });
    });

//registration.html

function toggleInput(select) {
    var input = document.querySelector('[name="my_form_input"]');
    input.disabled = (select.value !== "(not in the choices)");
}