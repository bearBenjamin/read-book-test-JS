export default class Cart {
    constructor() {
        this.items = [];
    }

    addToCard(item) {
        this.items.push(item);
    }
}
