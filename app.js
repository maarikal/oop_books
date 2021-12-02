// UI object
const ui = new UI();

// events elements
const form = document.querySelector("form");

// events
form.addEventListener("submit", addBook);

function addBook(event) {
    const titleInput = document.querySelector("#raamatuNimi");
    const authorInput = document.querySelector("#raamatuAutor");
    const isbnInput = document.querySelector("#ISBN");

    let raamatuNimi = titleInput.value;
    let raamatuAutor = authorInput.value;
    let raamatuISBN = isbnInput.value;

    const book = new Book(raamatuNimi, raamatuAutor, raamatuISBN);
    // add book value to visual
    ui.addBook(book);

    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = ""; // teeme sisetuse kastid (ehk input väljad) tühjaks pärast iga sisestust
    event.preventDefault(); // kontrollib, kas vorm Submit töötab
}