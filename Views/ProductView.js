class ProductView {
    //Print the basic product information.
    printProduct(title, price, description) {
        console.log(title);
        console.log("Price: " + price + "\tDescription: " + description);
        console.log("\n");
    }
}

module.exports = ProductView;