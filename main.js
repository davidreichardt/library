const myLibrary = [];
const newBookButton = document.querySelector('.new-book');
const dialog = document.querySelector('dialog');
const submit = document.querySelector('.submit');
const close = document.querySelector('.close');
const form = document.getElementById('new-book-form');

newBookButton.addEventListener('click', () => {
  dialog.showModal();
});

close.addEventListener('click', () => {
  dialog.close();
});

function resetInputs() {

}

function Book(title, author, pages, read = false) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
  console.log(myLibrary);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('new-book-title').value.trim();
  const author = document.getElementById('new-book-author').value.trim();
  const pages = parseInt(document.getElementById('new-book-pages').value);
  addBookToLibrary(title, author, pages);
  form.reset();
  dialog.close();
});
