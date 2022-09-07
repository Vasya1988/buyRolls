import * as module from './module.js';


const controller = (props) => {
    const cartButton = document.querySelectorAll('[type="button"]')
    cartButton.forEach((el) => {
        el.addEventListener('click', (event) => {
            console.log(event)
        })
    })
    console.log('Hello from controller')
}

export default controller;