// Product object
const product = {
    productId: 101,
    productName: "Laptop",
    price: 50000,
    quantity: 2,

    // Method to calculate total price
    calculateTotalPrice: function () {
        return this.price * this.quantity;
    },

    // Method to update quantity
    updateQuantity: function (newQuantity) {
        this.quantity = newQuantity;
    },

    // Method to display all product information
    displayInfo: function () {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
        console.log("Quantity:", this.quantity);
        console.log("Total Price:", this.calculateTotalPrice());
    }
};

// Display initial product information
product.displayInfo();

// Update quantity
product.updateQuantity(5);

console.log("\nAfter updating quantity:");
product.displayInfo();