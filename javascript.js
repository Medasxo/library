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

function addBookToLibrary() {
    const form = document.getElementById("form");
    let title = form.elements['title'].value;
    let author = form.elements['author'].value;
    let pages = form.elements['pages'].value;
    let read = form.elements['read'].value;
    myLibrary[myLibrary.length] = new Book(title, author, pages, read);
    displayLibrary();
    form.style.display = 'none';
    
}

function displayLibrary(){
    const libraryContainer = document.querySelector(".container");
    while(document.querySelector(".book") !== null){
        
        const deleteDiv = document.querySelector(".book");
        libraryContainer.removeChild(deleteDiv)
    }
    console.log("a");
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





const btn = document.getElementById('newBook');
btn.addEventListener('click', () =>{
    const form = document.getElementById('form');
    if(form.style.display === 'none'){
        form.style.display = 'block';
    }
    else{
        form.style.display = 'none';
    }
})