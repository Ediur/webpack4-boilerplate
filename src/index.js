import {cube} from './js/math';
import './scss/main.scss';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack! Testing JavaScript',
        '6 cubed is equal to ' + cube(6)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());