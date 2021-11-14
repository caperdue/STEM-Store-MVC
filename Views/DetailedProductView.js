class DetailedProductView {
    // Print the detailed product information.
    printDetailedProduct(title, quantity, id, rating) {
        console.log(title);
        console.log("ID: " + id + "\tQuantity left: " + quantity + "\tCustomer Rating: " + rating);
        console.log("\n");
    }
}
module.exports = DetailedProductView;