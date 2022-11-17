'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('Tema-escuro');

    var className = document.body.classList;
    if (className == 'Tema-claro') {
        this.textContent = 'Escuro';
    }
    else {
        this.textContent = 'Claro';
    }
        console.log('current class name: ' + className);
        console.log('current button name: ' + this.textContent);
}
);


