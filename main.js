const myLibrary = [];
const newBookButton = document.querySelector('.new-book');
const dialog = document.querySelector('dialog');
const submit = document.querySelector('.submit');
const close = document.querySelector('.close');
const form = document.getElementById('new-book-form');
const readStatusButton = document.querySelector('.read-status');
const libraryContainer = document.querySelector('.library-container');

newBookButton.addEventListener('click', () => {
  dialog.showModal();
});

close.addEventListener('click', () => {
  dialog.close();
});

function Book(title, author, pages, read = false) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

//add eventlistener to read status button
// readStatusButton.addEventListener('click', () => {});
//default read status is false and is yellow
//user clicks on read status button
//user click changes it to true, and it becomes green and says read
//toggleable

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
  renderLibrary();
  form.reset();
  dialog.close();
});

function createBookCard(book) {
  const newBookCard = document.createElement('div');
  const newBookTitle = document.createElement('h3');
  const newBookAuthor = document.createElement('p');
  const newBookPages = document.createElement('p');
  const newBookRead = document.createElement('button');

  newBookCard.classList.add('book');
  newBookCard.setAttribute('data-id', book.id);

  newBookTitle.classList.add('book-title');
  newBookTitle.textContent = book.title;

  newBookAuthor.classList.add('book-author');
  newBookAuthor.textContent = book.author;

  newBookPages.classList.add('book-pages');
  newBookPages.textContent = `${book.pages} Pages`;

  newBookRead.classList.add('book-read');
  newBookRead.setAttribute('type', 'button');
  newBookRead.textContent = book.read ? 'Not Read' : 'Read';

  newBookCard.appendChild(newBookTitle);
  newBookCard.appendChild(newBookAuthor);
  newBookCard.appendChild(newBookPages);
  newBookCard.appendChild(newBookRead);

  return newBookCard;
}

function renderLibrary() {
  libraryContainer.innerHTML = '';
  myLibrary.forEach((book) => {
    const newBookCard = createBookCard(book);
    libraryContainer.appendChild(newBookCard);
  });
}
