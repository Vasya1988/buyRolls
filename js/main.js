import countRoll from "./Components/countRoll.js";
import cart from "./cart.js";
import totalCost from "./totalCost.js";

// Elements of page
export const elements = {
    rollList: document.querySelector('[data-rollList]'),
    cartButton: document.querySelectorAll('.card'),
    itemsControl: document.querySelectorAll('.items__control'),
    countButton: document.querySelectorAll('[data-count-button]')
}

// Storage
export const state = {
    cart: null,
    markupRollRender: (id, image, name, amount, weight, price, amountOfDishes) => {
        amountOfDishes = amountOfDishes || 1;
        return `<!-- Ролл -->
        <div class="col-md-6">
            <div data-id="${id}" class="card mb-4">
                <img class="product-img" src=${image} alt="">
                <div class="card-body text-center">
                    <h4 class="item-title">${name}</h5>
                    <p><small class="text-muted">${amount}</small></p>
    
                    <div class="details-wrapper">
                        <div class="items">
                            <div data-count-button="-" class="items__control">-</div>
                            <div class="items__current">${amountOfDishes}</div>
                            <div data-count-button="+" class="items__control">+</div>
                        </div>
    
                        <div class="price">
                            <div class="price__weight">${weight}</div>
                            <div class="price__currency">${price}</div>
                        </div>
                    </div>
    
                    <button type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>
                    
                </div>
            </div>
        </div>
        <!-- // Ролл -->`
    },
    rollList: [
        {
            name: 'Филадельфия хит ролл',
            id: '01',
            amount: '6 шт.',
            weight: '180г.',
            price: '300 ₽',
            image: 'img/roll/philadelphia.jpg'
        },
        {
            name: 'Калифорния темпура',
            id: '02',
            amount: '6 шт.',
            weight: '205г.',
            price: '250 ₽',
            image: 'img/roll/california-tempura.jpg'
        },
        {
            name: 'Запеченый ролл «Калифорния»',
            id: '03',
            amount: '6 шт.',
            weight: '182г',
            price: '230 ₽',
            image: 'img/roll/zapech-california.jpg'
        },
        {
            name: 'Филадельфия',
            id: '04',
            amount: '6 шт.',
            weight: '230г',
            price: '320 ₽',
            image: 'img/roll/philadelphia.jpg'
        },
        
    ],
    markupCartRoll: (id, image, name, amount, weight, price, amountOfDishes) => {
        amountOfDishes = amountOfDishes || 1;
        return `<!-- cart-item  -->
        <div data-id="${id}" class="cart-item">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src=${image} alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${name}</div>
                    <div class="cart-item__weight">${amount} / ${weight}</div>

                    <!-- cart-item__details -->
                    <div class="cart-item__details">

                        <div class="items items--small">
                            <div data-count-button="-" class="items__control">-</div>
                            <div class="items__current">${amountOfDishes}</div>
                            <div data-count-button="+" class="items__control">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${price}</div>
                        </div>

                    </div>
                    <!-- // cart-item__details -->

                </div>
            </div>
        </div>
        <!-- // cart-item  -->`
    },
    markupFullCart: () => {
        return `<!-- Корзина Полная -->
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Ваш заказ</h5>
                
                <!-- cart-wrapper -->
                <div class="cart-wrapper">

                    <div class="cart-total">
                        <p><span class="h5">Доставка:</span> <span class="delivery-cost free">бесплатно</span> </p>
                        <p><span class="h5">Итого:</span> <span class="total-price">0</span> <span class="rouble">₽</span></p>
                    </div>


                </div>
                <!-- // cart-wrapper -->

            </div>

            <div class="card-body border-top">
                <h5 class="card-title">Оформить заказ</h5>

                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Ваш номер телефона">
                    </div>
                    <button type="submit" class="btn btn-primary">Заказать</button>
                </form>


            </div>
        </div>
        <!-- // Корзина Полная -->`
    },
    markupCartNull: () => {
        return `<!-- Корзина Пустая -->
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">Ваш заказ</h5>
                <div class="alert alert-secondary" role="alert">
                    Корзина пуста
                </div>
            </div>
        </div>
        <!-- // Корзина Пустая -->`
    }
}

// Rolls list render
export const rollListRender = () => {
    return new Promise ((resolve, reject) => {
        state.rollList.map((el) => {
            return elements.rollList.insertAdjacentHTML('afterBegin',state.markupRollRender(el.id , el.image, el.name, el.amount, el.weight, el.price))
        }), 
        resolve()
    })
}

// ----------------- Run functions

rollListRender()
countRoll()
cart()
totalCost();



// ----------------- Event listeners




