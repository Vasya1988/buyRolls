import * as main from '../main.js'
import totalCost from '../totalCost.js';

const countRoll = (props) => {
    const totalPrice = document.querySelector('.total-price');

        window.addEventListener('click', (event, index) => {

            if (event.target.dataset.countButton) {
                const count = event.target.dataset.countButton;
                let amount = event.target.closest('.items').querySelector('.items__current');
                
                // Check - is it roll in cart wrapper
                if (event.target.closest('.cart-wrapper')) {

                    Number(amount.innerText) === 1 && count === '-' ? event.target.closest('[data-id]').remove() : false;
                    totalPrice.innerText = 0
                    
                }

                count === '-' ? amount.innerText = Number(amount.innerText) - 1 : count === '+' ? amount.innerText = Number(amount.innerText) + 1 : false
                
                totalCost()

                amount.innerText < '1' ? amount.innerText = '1' : true ;
            }
        })
        
        console.log('Hello from count')
}
export default countRoll;