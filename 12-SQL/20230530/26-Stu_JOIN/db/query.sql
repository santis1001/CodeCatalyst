SELECT favorite_books.*, book_prices.price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;


