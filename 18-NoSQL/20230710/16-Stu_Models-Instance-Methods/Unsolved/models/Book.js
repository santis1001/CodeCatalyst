const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, require: true },
    author: { type: String, require: true },
    price: Number,
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    console.log(
        `The Book "${this.title}" by ${this.author} has 50% discount: new price ${(this.price) / 2}`
    );
};
// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model
const book = new Book({ title: "Naruto", author: "Masashi Kishimoto", price: "10.00" })
// TODO: Call the custom instance method on the instance

const responseGetInstance = book.get('price', String);
console.log(
    `The value of the book for this book ${responseGetInstance}`
);

book.getDiscount();

module.exports = Book;
