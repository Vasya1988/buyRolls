const totalCost = () => {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItem = document.querySelectorAll('.cart-item');
    const totalPrice = document.querySelector('.total-price');
    
    let costResult = 0;
    cartItem.forEach((el)=>{
        let amountOfDishes = el.querySelector('.items__current').innerText;
        let cost = el.querySelector('.price__currency').innerText;
        console.log(Number(amountOfDishes) * Number(cost.split(' ')[0]));
        costResult = costResult + (Number(amountOfDishes) * Number(cost.split(' ')[0]))
        totalPrice.innerText = costResult
    })
}

export default totalCost;