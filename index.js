const express = require("express");

//Database
const database = require("./database");
//INITIALIZE EXPRESS

const booky = express();

/*
ROUTE          /(root route)
Description    to get all the book
Access         public
Parameter      none
Methods        Get
 */

booky.get("/", (req, res) => {
    return res.json({ books: database.books });
});

/*
ROUTE          /is
Description    to get specific book on ISBN
Access         public
Parameter      isbn
Methods        Get
 */

booky.get("/is/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if (getSpecificBook.length === 0) {
        return res.json({ error: `No book found for ISBN number : ${req.params.isbn}` });
    }//to check if the array is empty

    return res.json({ bookinfo: getSpecificBook })

});

/*
ROUTE          /c
Description    to get specific book on category
Access         public
Parameter      category
Methods        Get
*/

booky.get("/c/:category", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category) //includes is used because category is a array and includes will help to visit each entry in the array
    )

    if (getSpecificBook.length === 0) {
        return res.json({ error: `No book found for category: ${req.params.category}` });
    }//to check if the array is empty

    return res.json({ book: getSpecificBook })
});

/*
ROUTE          /l
Description    to get specific book on language
Access         public
Parameter      lang
Methods        Get
*/

booky.get("/l/:language", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.language === req.params.language
    );

    if (getSpecificBook.length === 0) {
        return res.json({ error: `No book for language: ${req.params.language}` })
    }

    return res.json({ book: getSpecificBook })
});



/*
ROUTE          /author
Description    to get all authors
Access         public
Parameter      NONE
Methods        Get
*/
booky.get("/author", (req, res) => {
    return res.json({ author: database.author })
});

/*
ROUTE          /author/id
Description    to get all authors based on id
Access         public
Parameter      id
Methods        Get
*/

booky.get("/author/:id", (req, res) => {
    const getSpecificAuthor = database.author.filter(
        (author) => author.id == parseInt(req.params.id)
    );

    if (getSpecificAuthor.length === 0) {
        return res.json({ error: `No author with id as ${req.params.id} found` })
    }

    return res.json({ author: getSpecificAuthor })
});

/*
ROUTE          /author/book
Description    to get all authors based on book ISBN
Access         public
Parameter      isbn
Methods        Get
*/

booky.get("/author/book/:isbn", (req, res) => {
    const getSpecificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.isbn)
    );

    if (getSpecificAuthor.length === 0) {
        return res.json({ error: `No author found for book for ${req.params.isbn}` })
    }

    return res.json({ author: getSpecificAuthor })
});

/*
ROUTE          /publications
Description    to get all publications
Access         public
Parameter      NONE 
Methods        Get
*/
booky.get("/publications", (req,res) => {
    return res.json({publications: database.publications})
});


/*
ROUTE          /publications/id
Description    to get all publications based on id
Access         public
Parameter      id 
Methods        Get
*/
booky.get("/publications/:id", (req, res) => {
    const getSpecificPublications = database.publications.filter(
        (publication) => publication.id == req.params.id
    );

    if (getSpecificPublications.length === 0) {
        return res.json({ error: `No author with id as ${req.params.id} found` })
    }

    return res.json({ author: getSpecificPublications })
});


/*
ROUTE          /publications/isbn
Description    to get all publications based on book isbn
Access         public
Parameter      isbn
Methods        Get
*/
booky.get("/publications/book/:isbn", (req, res) => {
    const getSpecificPublications = database.publications.filter(
        (publication) => publication.books.includes(req.params.isbn)
    );

    if (getSpecificPublications.length === 0) {
        return res.json({ error: `No author with id as ${req.params.id} found` })
    }

    return res.json({ author: getSpecificPublications })
});



booky.listen(3000, () => {
    console.log("Server is up and running!")
});

//nodemon is used to dynamically update the running server