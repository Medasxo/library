let myLibrary = [];
let bookCount = 1;


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + " by " + author + ", " + pages + ", " + read;
    }
}

function addBookToLibrary() {
    const form = document.getElementById("form");
    let title = form.elements['title'].value;
    let author = form.elements['author'].value;
    let pages = form.elements['pages'].value;
    let read = form.elements['read'].value;
    if (title === '' || author === '' || pages === '' || read === '') {
        return;
    }
    else {
        myLibrary[myLibrary.length] = new Book(title, author, pages, read);
        displayLibrary();
        form.style.display = 'none';
        form.reset();
    }


}

function displayLibrary() {
    const libraryContainer = document.querySelector(".container");
    while (document.querySelector(".book") !== null) {

        const deleteDiv = document.querySelector(".book");
        libraryContainer.removeChild(deleteDiv)
    }
    const br = document.createElement("br");
    for (let i = 0; i < myLibrary.length; i++) {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML += myLibrary[i].title;
        bookDiv.insertAdjacentHTML('beforeend', '<span style="font-size: 15px;">(Title) </span>',);
        bookDiv.innerHTML += myLibrary[i].author;
        bookDiv.insertAdjacentHTML('beforeend', '<span style="font-size: 15px;">(Author) </span>',);
        bookDiv.innerHTML += myLibrary[i].pages;
        bookDiv.insertAdjacentHTML('beforeend', '<span style="font-size: 15px;">(Pages) </span>',);
        if (myLibrary[i].read === "Yes") {
            const yesButton = document.createElement("button");
            yesButton.setAttribute("id", i);
            yesButton.setAttribute("type", "button");
            yesButton.setAttribute("class", "yesButton");
            yesButton.setAttribute("onclick", "changeReadStatusToNo(this.id)");
            yesButton.innerText = "Read";
            bookDiv.appendChild(yesButton);

        }
        else {
            const noButton = document.createElement("button");
            noButton.setAttribute("id", i);
            noButton.setAttribute("type", "button");
            noButton.setAttribute("class", "noButton");
            noButton.setAttribute("onclick", "changeReadStatusToYes(this.id)");
            noButton.innerText = "Not Read";
            bookDiv.appendChild(noButton);
        }
        deleteBook = document.createElement("button");
        deleteBook.setAttribute("id", i);
        deleteBook.classList.add("deleteBook");
        deleteBook.innerText = "X";
        deleteBook.setAttribute("onclick", "deleteBookById(this.id)");
        bookDiv.appendChild(deleteBook);

        bookDiv.appendChild(br);
        const bookNumber = document.createElement("div");
        bookNumber.classList.add("bookNumber");
        bookNumber.textContent = i + 1;
        bookDiv.appendChild(bookNumber);
        libraryContainer.appendChild(bookDiv);


    }
}



function changeReadStatusToNo(id) {
    myLibrary[id].read = "No";
    displayLibrary();
}

function changeReadStatusToYes(id) {
    myLibrary[id].read = "Yes";
    displayLibrary();
}

function deleteBookById(id) {
    myLibrary.splice(id, 1);
    displayLibrary();
}


const btn = document.getElementById('newBook');
btn.addEventListener('click', () => {
    const form = document.getElementById('form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    }
    else {
        form.style.display = 'none';
    }
})