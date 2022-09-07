import controller from "./controller.js";
import view from './view.js';

export const elements = {
    rollList: document.querySelector('[data-rollList]'),
    cartButton: document.querySelectorAll('.card')
}

export const state = {
    cart: null,
    markupRollRender: (image, name, amount, weight, price) => {
        return `<!-- Ролл -->
        <div class="col-md-6">
            <div class="card mb-4">
                <img class="product-img" src=${image} alt="">
                <div class="card-body text-center">
                    <h4 class="item-title">${name}</h5>
                    <p><small class="text-muted">${amount}</small></p>
    
                    <div class="details-wrapper">
                        <div class="items">
                            <div class="items__control">-</div>
                            <div class="items__current">1</div>
                            <div class="items__control">+</div>
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
            amount: '6 шт.',
            weight: '180г.',
            price: '300 ₽',
            image: 'img/roll/philadelphia.jpg'
        },
        {
            name: 'Калифорния темпура',
            amount: '6 шт.',
            weight: '205г.',
            price: '250 ₽',
            image: 'img/roll/california-tempura.jpg'
        },
        {
            name: 'Запеченый ролл «Калифорния»',
            amount: '6 шт.',
            weight: '182г',
            price: '230 ₽',
            image: 'img/roll/zapech-california.jpg'
        },
        {
            name: 'Филадельфия',
            amount: '6 шт.',
            weight: '230г',
            price: '320 ₽',
            image: 'img/roll/philadelphia.jpg'
        },
        
    ]
}

export const rollListRender = () => {
    return state.rollList.map((el) => {
        return elements.rollList.insertAdjacentHTML('afterBegin',state.markupRollRender(el.image, el.name, el.amount, el.weight, el.price))
    })
}

// ----------------- Run functions
view()
controller(elements)
// ----------------- Event listeners
// window.addEventListener('load', rollListRender)



