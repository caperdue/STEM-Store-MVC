class Product {
    // Constructor for the Product class.
    constructor(title, description, price, id, quantity, rating) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.id = id;
        this.quantity = quantity;
        this.rating = rating;
    }
    
    // Getters for the Product.

    getTitle() {
        return this.title;
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.description;
    }

    getQuantity() {
        return this.quantity;
    }

    getId() {
        return this.id;
    }

    getRating() {
        return this.rating;
    }

    //Setters would live below here
}

module.exports = Product;