import * as main from './main.js';
import countRoll from './Components/countRoll.js';
import totalCost from './totalCost.js';


const cart = () => {

    // Cart listener
        window.addEventListener('click', (event) => {

            // Check if the click was a button
            if (event.target.type === 'button') {

                // Element button add to cart
                const toCart = event.target;

                // Element cart
                const cart = document.querySelector('[data-cart]')

                const info = {
                    id: event.target.closest('[data-id]').dataset.id,
                    image: event.target.closest('.card').querySelector('.product-img').currentSrc,
                    name: event.target.closest('.card').querySelector('.item-title').innerText,
                    amount: event.target.closest('.card').querySelector('.text-muted').innerText,
                    weight: event.target.closest('.card').querySelector('.price__weight').innerText,
                    price: event.target.closest('.card').querySelector('.price__currency').innerText,
                    amountOfDishes: event.target.closest('.card').querySelector('.items__current').innerText
                }
                // This changes the appearance of the cart
                if (cart.dataset.cart === 'empty') {

                    // Here we change the status of the cart
                    cart.dataset.cart = 'full';

                    cart.innerHTML = main.state.markupFullCart();

                    // Element cart wrapper
                    const cartWrapper = document.querySelector('.cart-wrapper');

                    // Change amount of dishes in cart
                    const checkRoll = document.querySelector('.cart-wrapper').querySelector(`[data-id="${info.id}"]`);

                    // Check - Have that roll in cart?
                    if (checkRoll) {
                        // The old amount have in cart
                        let old = checkRoll.querySelector('.items__current').innerText;

                        checkRoll.querySelector('.items__current').innerText = Number(old) + Number(info.amountOfDishes);

                    } else {
                        // Add rolls to cart
                        cartWrapper.insertAdjacentHTML('afterbegin', main.state.markupCartRoll(info.id, info.image, info.name, info.amount, info.weight, info.price, info.amountOfDishes))
                    }
                
                    totalCost()

                } else if (cart.dataset.cart === 'full') {

                    // Element cart wrapper
                    const cartWrapper = document.querySelector('.cart-wrapper');
                    // Change amount of dishes in cart
                    const checkRoll = document.querySelector('.cart-wrapper').querySelector(`[data-id="${info.id}"]`);

                    // Check - Have that roll in cart?
                    if (checkRoll) {
                        // The old amount have in cart
                        let old = checkRoll.querySelector('.items__current').innerText;

                        checkRoll.querySelector('.items__current').innerText = Number(old) + Number(info.amountOfDishes);

                    } else {
                        // Add rolls to cart
                        cartWrapper.insertAdjacentHTML('afterbegin', main.state.markupCartRoll(info.id, info.image, info.name, info.amount, info.weight, info.price, info.amountOfDishes))
                    }
                
                    totalCost()
                }
            }
        })
}
export default cart;