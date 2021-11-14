class StoreHeaderView {
    // Functions to print the store header information.

    printStoreHeader(title) {
        console.log(title + "\n");
    }

    printDetailedStoreHeader(title){
        console.log(title + "\n");
    }

    // Print a help message for the user to input.
    printHelpDescription(helpDescription) {
        console.log(helpDescription + "\n");
    }

    // Print an invalid message based on the user input.
    printInvalidInputMsg(msg) {
        console.log(msg + "\n");
    }
}

module.exports = StoreHeaderView;