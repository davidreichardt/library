const myLibrary = [];
const newBook = document.querySelector('.new-book');
const dialog = document.querySelector('dialog');

newBook.addEventListener('click', () => {
  dialog.showModal();
});

function Book(title, author, pages, read = false) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

}