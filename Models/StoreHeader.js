class StoreHeader {
    // Constructor for the StoreHeader class.
    constructor(title, detailedTitle, helpDescription, invalidInputMsg) {
        this.title = title;
        this.detailedTitle = detailedTitle;
        this.helpDescription = helpDescription;
        this.invalidInputMsg = invalidInputMsg;
    }

    //Getters for the StoreHeader.

    getTitle() {
        return this.title;
    }

    getDetailedTitle() {
        return this.detailedTitle;
    }
    
    getInvalidInputMsg() {
        return this.invalidInputMsg;
    }

    getHelpDescription(){
        return this.helpDescription;
    }
}

module.exports = StoreHeader;