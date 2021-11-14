class StoreHeaderController {
    // Constructor for the StoreHeaderController.
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    // Getters for the StoreHeaderController to retrieve from the model.

    getTitle() {
        return this.model.getTitle();
    }
    
    getDetailedTitle() {
        return this.model.getDetailedTitle();
    }

    getHelpDescription() {
        return this.model.getHelpDescription();
    }

    getInvalidInputMsg() {
        return this.model.getInvalidInputMsg();
    }

    // Get the view to display information.

    displayStoreHeader() {
        return this.view.printStoreHeader(this.getTitle());
    }

    displayDetailedStoreHeader() {
        return this.view.printDetailedStoreHeader(this.getDetailedTitle());
    }

    displayHelpDescription() {
        return this.view.printHelpDescription(this.getHelpDescription());
    }

    displayInvalidInputMsg() {
        return this.view.printInvalidInputMsg(this.getInvalidInputMsg());
    }

}

module.exports = StoreHeaderController;