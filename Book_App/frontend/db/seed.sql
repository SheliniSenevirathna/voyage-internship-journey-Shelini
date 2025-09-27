USE book_app;

INSERT INTO users (username, email, password)
VALUES ('testuser', 'test@example.com', '$2a$10$Z8o1...'); -- bcrypt hashed password

INSERT INTO books (title, author, description, published_year)
VALUES
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy adventure', 1937),
('1984', 'George Orwell', 'Dystopian novel', 1949);
