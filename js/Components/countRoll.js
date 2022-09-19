import * as main from '../main.js'
import totalCost from '../totalCost.js';

const countRoll = (props) => {
    
    window.addEventListener('click', (event, index) => {

        // Element cart
        const cart = document.querySelector('[data-cart]')

        // Check if the click was a button 'count'
        if (event.target.dataset.countButton) {
            
            // Event on button
            const count = event.target.dataset.countButton;

            // We have received an element of amounts of rolls
            let amount = event.target.closest('.items').querySelector('.items__current');
            
            // Check - is it roll in cart wrapper?
            const deletRollInCart = () => {
                return new Promise ((resolve, reject) => {
                    if (event.target.closest('.cart-wrapper')) {
                        
                        Number(amount.innerText) === 1 && count === '-' ? 
                            
                            event.target.closest('[data-id]').remove()
 
                        : false;  
                    };
                    resolve()
                })
            }
            deletRollInCart().then((e) => {
                // console.log('Then --> ', )
                document.querySelector('.cart-wrapper').querySelector('[data-id]') === null ?
                    {
                        onStep: cart.dataset.cart = 'empty',
                        secondStep: cart.innerHTML = main.state.markupCartNull()
                    }
                    : true
                
            })

            // Add or remove roll's quantity(Количество)
            count === '-' ? amount.innerText = Number(amount.innerText) - 1 : count === '+' ? amount.innerText = Number(amount.innerText) + 1 : false
            
            // Run total cost
            totalCost()

            amount.innerText < '1' ? amount.innerText = '1' : true ;
        }
    })
}
export default countRoll;