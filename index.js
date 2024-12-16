const bookGrid = document.querySelector(".container");
const addBookBtn = document.querySelector("#add-book");
const dialog = document.querySelector("dialog");
const dialogSubmitBtn = document.querySelector("#dialog--submit-btn");
const dialogAuthor = document.querySelector("#dialog-author");
const dialogTitle = document.querySelector("#dialog-title");
const dialogPages = document.querySelector("#dialog-pages");
const dialogRead = document.querySelector("#dialog-read");

const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
}



function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  while(bookGrid.firstChild){
    bookGrid.removeChild(bookGrid.lastChild);
  }

  myLibrary.forEach((book, position) => {
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
    book.read === true ? cardReadCheck.textContent = "Read" : cardReadCheck.textContent = "Unread";
    div.appendChild(cardReadCheck);

    const deleteBook = document.createElement("button");
    deleteBook.textContent = "Delete book";
    deleteBook.classList.add("delete-book-btn");
    div.appendChild(deleteBook);

    //add delete book button and functionality
    deleteBook.addEventListener("click", ()=>{
      myLibrary.splice(position, 1);

      displayBooks();
    });

    const readBook = document.createElement("button");
    if(book.read){
      readBook.textContent = 'Mark as unread';
      readBook.classList.add('read');
    }
    else{
      readBook.textContent = 'Mark as read';
      readBook.classList.remove('read');
    }
    readBook.classList.add("read-book-btn");
    div.appendChild(readBook);

    readBook.addEventListener("click", ()=>{
      book.read = !book.read;
      readBook.classList.toggle('read');

      readBook.textContent = book.read ? 'Mark as unread' : 'Mark as read';

    });

    bookGrid.appendChild(div);

  });
}

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});


dialogSubmitBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  if(dialogAuthor !== '' && dialogTitle.value !== ''
      && dialogPages.value !== ''){
    //create book object with specified inputs
    const book = new Book(dialogAuthor.value, dialogTitle.value,
      dialogPages.value, dialogRead.checked);

    //add book to library and display
    addBookToLibrary(book);
    displayBooks();

    //clear dialog contents
    dialogAuthor.value = '';
    dialogTitle.value = '';
    dialogPages.value = '';
    dialogRead.checked = false;

    dialog.close()
  }
});

