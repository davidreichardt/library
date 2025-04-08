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

//toggle read status
Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
  console.log(myLibrary);
}

//open dialog form and assign inputs
//add new book to library array
//re-render array to page, reset the form and close it
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

//create DOM elements for new book to create a new book
function createBookCard(book) {
  const newBookCard = document.createElement('div');
  const newBookTitle = document.createElement('h3');
  const newBookAuthor = document.createElement('p');
  const newBookPages = document.createElement('p');
  const newBookRead = document.createElement('button');
  const removeBookButton = document.createElement('button');

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

  removeBookButton.classList.add('remove');
  removeBookButton.setAttribute('type', 'button');
  removeBookButton.textContent = 'Remove';

  newBookCard.appendChild(newBookTitle);
  newBookCard.appendChild(newBookAuthor);
  newBookCard.appendChild(newBookPages);
  newBookCard.appendChild(newBookRead);
  newBookCard.appendChild(removeBookButton);

  return newBookCard;
}

//wipe the container to prevent duplicates
//take DOM element created and append it to the container to render it on page
function renderLibrary() {
  libraryContainer.innerHTML = '';
  myLibrary.forEach((book) => {
    const newBookCard = createBookCard(book);
    libraryContainer.appendChild(newBookCard);
  });
}
