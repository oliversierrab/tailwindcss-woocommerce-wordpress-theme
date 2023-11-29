function toggleElementDisplay(element, aria = false) {
    if (element.classList.contains('block')) {
        element.classList.add('hidden');
        element.classList.remove('block');

        if (aria) {
            ele.setAttribute('aria-hidden', true);
        }
    } else {
        element.classList.add('block');
        element.classList.remove('hidden');

        if (aria) {
            element.removeAttribute('aria-hidden');
        }
    }
}
window.addEventListener('load', function () {
    document.querySelector('nav button[aria-controls="mobile-menu"]').addEventListener('click', (event) => {
        const ele = event.currentTarget;
        const icons = ele.querySelectorAll('svg');

        icons.forEach(element => {
            toggleElementDisplay(element);
        });

        if (ele.getAttribute('aria-expanded') === 'true') {
            ele.setAttribute('aria-expanded', 'false');
            document.querySelector('#mobile-menu').classList.add('hidden');
        } else {
            ele.setAttribute('aria-expanded', 'true');
            document.querySelector('#mobile-menu').classList.remove('hidden');
        }
    });
}, false);