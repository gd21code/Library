const myLibrary = [];

// book initialization
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

let bookBtn = document.querySelector('#book-btn');
bookBtn.addEventListener('click', function() {
    let newBookForm = document.querySelector('#book-form');
    newBookForm.style.display = 'block';

});

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayCard();
}

document.querySelector('#book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
});

// hide button function
let hideBookBtn = document.querySelector('#submit-btn');
hideBookBtn.addEventListener('click', function () {
    let newBookForm = document.querySelector('#book-form');
    newBookForm.style.display = 'none';
});

function displayCard() {
    let library = document.querySelector('#card-space');
    library.textContent = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        let book = myLibrary[i];
        card.classList.add('library-book');
        library.appendChild(card);
        card.textContent =  `Title: ${book.title}\n Author: ${book.author}\n Pages: ${book.pages}`;

        // code area for read toggle button
        Book.prototype.readToggle = function () {
            this.read = !this.read
        }

        const readBtn = document.createElement('button');
        readBtn.classList.add('readBtn');
        readBtn.textContent = `${book.read ? "Read" : "Not Read"}`;
        card.appendChild(readBtn);
        readBtn.addEventListener("click", function () {
            book.readToggle();
            if (book.read === true) {
                readBtn.textContent = 'Read';
            } else {
                readBtn.textContent = 'Not Read';
            }
        });

        // remove button function
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        removeBtn.textContent = 'Remove';
        card.appendChild(removeBtn);
        card.dataset.id = book.id;
        removeBtn.addEventListener("click", function () {
            const id = card.dataset.id;
            const index = myLibrary.findIndex(book => book.id === id);
            console.log(index);
            myLibrary.splice(index, 1);
            displayCard();
        });
    }
}