const books = [
    {
        ISBN: "12345book",
        title: "Tesla",
        pubDate: "2023-08-05",
        language: "en",
        numPage: 250,
        author: [1, 2],
        publication: [1],
        category: ["tech", "space", "education"]
    },

    {
        ISBN: "12346book",
        title: "Java",
        pubDate: "2023-08-05",
        language: "hindi",
        numPage: 250,
        author: [3],
        publication: [2],
        category: ["tech", "programming", "education"]
    }
]

const author = [
    {
        id: 1,
        name: "Aditya",
        books: ["12345book", "123book"]
    },
    {
        id: 2,
        name: "Elon",
        books: ["12345book"]
    },
    {
        id: 3,
        name: "James",
        books: ["12346book"]
    }
]

const publications = [
    {
        id: 1,
        name: "writex",
        books: ["12345book"]
    },
    {
        id: 2,
        name: "writec",
        books: ["12346book","Subtle art of not giving a ****"]
    }
]


module.exports = { books, author, publications }; //This is done so that the above dataset is accesible to other .js files