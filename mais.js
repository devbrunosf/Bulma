document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

                // My code
                const navEnd = document.querySelector('.navbar-end');
                navEnd.classList.toggle('is-hidden');

                const navStart = document.querySelector('.navbar-start');
                navStart.classList.toggle('is-hidden');
            });
        });
    }

});

// Mudar cores header
window.addEventListener('scroll', function() {
    const posicao = document.querySelector('#step2').getBoundingClientRect();
    const nav = document.querySelector('nav');
    const logo = document.querySelector('nav').children[0].children[0];
    const inicio = document.querySelector('#menu').children[0].children[0];
    const sobre = document.querySelector('#menu').children[0].children[1];
    const contato = document.querySelector('#menu').children[0].children[2];

    if (posicao.y == 0 || posicao.y < 0) {
        nav.classList.add('has-background-white-ter');
        logo.classList.add('has-text-success');
        sobre.classList.add('has-text-success');
        sobre.classList.add('is-success');
        contato.classList.add('has-text-white');
        contato.classList.add('has-background-success');
        inicio.classList.remove('is-hidden');
        inicio.classList.add('has-text-success');
        // logo.classList.toggle('has-text-success-dark');
    } else {
        nav.classList.remove('has-background-white-ter');
        logo.classList.remove('has-text-success');
        sobre.classList.remove('has-text-success');
        sobre.classList.remove('is-success');
        contato.classList.remove('has-text-white');
        contato.classList.remove('has-background-success');
        inicio.classList.add('is-hidden');
        // logo.classList.toggle('has-text-white');
    }
    const step4 = document.querySelector('#step4').getBoundingClientRect();
    if (step4.y == 0 || step4.y < 0) {
        nav.classList.remove('has-background-white-ter');
        logo.classList.remove('has-text-success');
        sobre.classList.remove('has-text-success');
        sobre.classList.remove('is-success');
        contato.classList.remove('has-text-white');
        contato.classList.remove('has-background-success');
        inicio.classList.add('is-hidden');
        inicio.classList.remove('has-text-success');
        // logo.classList.toggle('has-text-success-dark');
    }

})