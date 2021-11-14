const readline = require('readline');
const uuid = require('uuid');

// Grab the models
const Product = require('./models/Product.js');
const StoreHeader = require('./models/StoreHeader.js');

// Grab the controllers
const ProductController = require('./Controllers/ProductController.js');
const StoreHeaderController = require('./Controllers/StoreHeaderController.js');

// Grab the views
const ProductView = require('./Views/ProductView.js');
const StoreHeaderView = require('./Views/StoreHeaderView.js');
const DetailedProductView = require('./Views/DetailedProductView.js');

// Setup the interface
const prompts = readline.createInterface(process.stdin, process.stdout);

function main() {

    // Create the models
    const ultraMagnet = new Product("HeavyMagnet5000", "One of the heaviest magnets in the world", 9000, uuid.v4(), Math.floor(Math.random() * 100), Math.floor(Math.random() * 5));
    const radCalculator = new Product("RadCalculator", "The coolest calculator you've ever seen", 60, uuid.v4(), Math.floor(Math.random() * 100), Math.floor(Math.random() * 5));
    const rubixCube = new Product("Rubix Cube", "A super awesome rubix cube", 30, uuid.v4(), Math.floor(Math.random() * 100), Math.floor(Math.random() * 5));
    const storeHeader = new StoreHeader("SUPER COOL AWESOME STEM TOY STORE FOR KIDS!", "DETAILED VIEW OF PRODUCTS", "PRESS D FOR MORE DETAIL ABOUT THE PRODUCTS, M TO RETURN BACK TO MAIN PRODUCT VIEW, OR X TO QUIT", "Sorry, you had invalid input! Exiting now.");
   
    const products = [ultraMagnet, radCalculator, rubixCube];

    // Create the views
    const ultraMagnetView = new ProductView();
    const radCalculatorView = new ProductView();
    const rubixCubeView = new ProductView();

    const dUltraMagnetView = new DetailedProductView();
    const dRadCalculatorView = new DetailedProductView();
    const dRubixCubeView = new DetailedProductView();

    const productViews = [ultraMagnetView, radCalculatorView, rubixCubeView];
    const detailedProductViews = [dUltraMagnetView, dRadCalculatorView, dRubixCubeView];

    const storeHeaderView = new StoreHeaderView();

    // Create the controllers
    const productController = new ProductController(products, productViews, detailedProductViews);
    const storeHeaderController = new StoreHeaderController(storeHeader, storeHeaderView);

    storeHeaderController.displayStoreHeader();
    startStore(productController, storeHeaderController);
}

// Display the store and navigate through the store
function startStore(productController, storeHeaderController) {
    const help = storeHeaderController.displayHelpDescription();
    prompts.question('', (answer) => {
            switch(answer){
                case 'M':
                    productController.displayAllProducts();
                    startStore(productController, storeHeaderController);
                break;
                case 'D':
                    storeHeaderController.displayDetailedStoreHeader();
                    productController.displayAllDetailedProducts();
                    startStore(productController, storeHeaderController)
                break;
                case 'X':
                    prompts.close();
                break;
                default:
                    storeHeaderController.displayInvalidInputMsg();
                    prompts.close();

            }
        });
    }

main();