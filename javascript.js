let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + " by " + author + ", " + pages + ", " + read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary[myLibrary.length] = new Book(title, author, pages, read);
}

function displayLibrary(){
    console.log(myLibrary.length);
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i].info());
    }
}

addBookToLibrary("Harry Potter", "JK", 290, "yes");
addBookToLibrary("Harry Pot", "JK", 292, "yes");

displayLibrary();