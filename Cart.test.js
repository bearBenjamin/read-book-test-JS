const Cart = require('./Cart');
const assert = require('assert');

test('The addToCart function can add an item to the cart', () => {
    const cart = new Cart();

    cart.addToCard('cheesecake');
    
    expect(cart.items).toEqual(["cheesecake"]);
    
});

test('The removeFromCart function can remove an item from the cart', () => {
    const cart = new Cart();

    cart.addToCard('cheesecake');
    cart.removeFromCart('cheesecake');

    expect(cart.items).toEqual([]);
});
