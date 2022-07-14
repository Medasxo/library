let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return  title + " by " + author + ", " + pages + ", " + read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary[myLibrary.length] = new Book(title, author, pages, read);
}

function displayLibrary(){
    const libraryContainer = document.querySelector(".container");
    const br = document.createElement("br");
    for(let i = 0; i < myLibrary.length; i++){
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        
        bookDiv.innerHTML += myLibrary[i].title;
        bookDiv.insertAdjacentHTML('beforeend', '<span style="font-size: 15px;">(Title) </span>',);
        bookDiv.innerHTML += myLibrary[i].author;
        bookDiv.insertAdjacentHTML('beforeend', '<span style="font-size: 15px;">(Author) </span>',);
        bookDiv.innerHTML += myLibrary[i].pages;
        bookDiv.insertAdjacentHTML('beforeend', '<span style="font-size: 15px;">(Pages) </span>',);
        if(myLibrary[i].read === "Yes"){
            bookDiv.insertAdjacentHTML('beforeend', '<button type="button" class="yesButton">Read</button>');
        }
        else{
            bookDiv.insertAdjacentHTML('beforeend',  '<button type="button" class="noButton">Not Read</button>');
        }

        bookDiv.appendChild(br);
        libraryContainer.appendChild(bookDiv);
        
    }
}

addBookToLibrary("Harry Potter", "JK. Rowling", 290, "Yes");
addBookToLibrary("Harry Pot", "JK", 292, "No");

displayLibrary();