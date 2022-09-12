import * as main from './main.js';
import countRoll from './Components/countRoll.js';


const cart = () => {

    // Element button add to cart
    const toCart = document.querySelectorAll('[type="button"]');

    // Element cart wrapper
    const cartWrapper = document.querySelector('.cart-wrapper');

     
    // Cart listener
    toCart.forEach((el) => {
        el.addEventListener('click', (event) => {
            const info = {
                    id: event.target.closest('[data-id]').dataset.id,
                    image: event.target.closest('.card').querySelector('.product-img').currentSrc,
                    name: event.target.closest('.card').querySelector('.item-title').innerText,
                    amount: event.target.closest('.card').querySelector('.text-muted').innerText,
                    weight: event.target.closest('.card').querySelector('.price__weight').innerText,
                    price: event.target.closest('.card').querySelector('.price__currency').innerText,
                    amountOfDishes: event.target.closest('.card').querySelector('.items__current').innerText
            }

            // Change amount of dishes in cart
            const checkRoll = document.querySelector('.cart-wrapper').querySelector(`[data-id="${info.id}"]`);

            
            
            // Check - Have that roll in cart?
            if (checkRoll) {
                // The amount have in cart
                let old = checkRoll.querySelector('.items__current').innerText;

                checkRoll.querySelector('.items__current').innerText = Number(old) + Number(info.amountOfDishes);

            } else {
                // Add rolls to cart
                cartWrapper.insertAdjacentHTML('afterbegin', main.state.markupCartRoll(info.id, info.image, info.name, info.amount, info.weight, info.price, info.amountOfDishes))
            }
           
        })
    })

    window.addEventListener('propertychange', (e)=> {
        console.log('--------------')
    })

   

    console.log('Hello from cart')
}
export default cart;