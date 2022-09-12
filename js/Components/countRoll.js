import * as main from '../main.js'

const countRoll = (props) => {

        window.addEventListener('click', (event, index) => {

            if (event.target.dataset.countButton) {
                const count = event.target.dataset.countButton;
                let amount = event.target.closest('.items').querySelector('.items__current');
                
                // Check - is it roll in cart wrapper
                if (event.target.closest('.cart-wrapper')) {

                    Number(amount.innerText) === 1 && count === '-' ? event.target.closest('[data-id]').remove() : false
                    
                }

                count === '-' ? amount.innerText = Number(amount.innerText) - 1 : count === '+' ? amount.innerText = Number(amount.innerText) + 1 : false
                
                amount.innerText < '1' ? amount.innerText = '1' : true ;
            }
        })
        
        console.log('Hello from count')
}
export default countRoll;