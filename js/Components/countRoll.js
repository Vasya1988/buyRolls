import * as main from '../main.js'

const countRoll = () => {
    return new Promise ((resolve, reject) => {
        const countButton = document.querySelectorAll('[data-count-button]');
        const amount = document.querySelectorAll('.items__current');
            countButton.forEach((el) => {
                el.addEventListener('click', ((event, index) => {
                    const count = event.target.dataset.countButton;
                    let amount = event.target.closest('.items').querySelector('.items__current').innerText;
                    count === '-' ? amount = 33 : count === '+' ? console.log(count) : false
                    
                }))
            })
        
            console.log('Hello from count')
            resolve()
    })
}
export default countRoll;