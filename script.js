const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    //book card rendering function needed 
}

document.querySelector('#book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookToLibrary();
    // alert('Hello World!');
})