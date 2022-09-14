const totalCost = () => {
    const cartItem = document.querySelectorAll('.cart-item');
    const totalPrice = document.querySelector('.total-price');
    const delivery = document.querySelector('.delivery-cost');
    
    let costResult = 0;
    cartItem.forEach((el)=>{
        let amountOfDishes = el.querySelector('.items__current').innerText;
        let cost = el.querySelector('.price__currency').innerText;
        // console.log(Number(amountOfDishes) * Number(cost.split(' ')[0]));
        costResult = costResult + (Number(amountOfDishes) * Number(cost.split(' ')[0]))
        totalPrice.innerText = costResult

        // Free delivery
        costResult > 500 ?
            {
                oneStep: delivery.innerText = 'БЕСПЛАТНО',
                twoStep: delivery.classList.add('free')
            }
        : {
            oneStep: delivery.innerText = '500 ₽',
            twoStep: delivery.classList.remove('free')
        }
    })
}

export default totalCost;