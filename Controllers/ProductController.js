class ProductController {
    // Constructor for the ProductController class.
    constructor(productModels, productViews, detailedProductViews) {
        this.productViews = productViews;
        this.detailedProductViews = detailedProductViews;
        this.productModels = productModels;
    }
    
    // Getters for the StoreHeaderController to retrieve from the model.

    getProducts() {
        return this.productModels;
    }
    getTitle(model) {
        return model.getTitle();
    }

    getDescription(model) {
        return model.getDescription();
    }

    getPrice(model) {
        return model.getPrice();
    }

    getId(model) {
        return model.getId();
    }

    getQuantity(model) {
        return model.getQuantity();
    }

    getRating(model) {
        return model.getRating();
    }

    // Get the views to display information.
    displayAllProducts() {
        this.productViews.forEach((view, index) => {
            view.printProduct(this.getTitle(this.getProducts()[index]), this.getPrice(this.getProducts()[index]), this.getDescription(this.getProducts()[index]));
        });
    }

    displayAllDetailedProducts() {
        this.detailedProductViews.forEach((view, index) => {
            view.printDetailedProduct(this.getTitle(this.getProducts()[index]), this.getQuantity(this.getProducts()[index]), this.getId(this.getProducts()[index]), this.getRating(this.getProducts()[index]));
        });
    }
}

module.exports = ProductController;

