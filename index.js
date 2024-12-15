const bookGrid = document.querySelector(".container");

const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    //create book div
    const div = document.createElement("div");
    div.classList.add("book");
    //add title, author, pages, and read status to div
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = book.title;
    div.appendChild(cardTitle);

    const cardAuthor = document.createElement("p")
    cardAuthor.textContent = book.author;
    div.appendChild(cardAuthor);

    const cardPages = document.createElement("p");
    cardPages.textContent = "Pages: " + book.pages;
    div.appendChild(cardPages);

    const cardReadCheck = document.createElement("p");
    this.book === true ? cardReadCheck.textContent = "Read" : cardReadCheck.textContent = "Unread";
    div.appendChild(cardReadCheck);

    bookGrid.appendChild(div);
  });
}

