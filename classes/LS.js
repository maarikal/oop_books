class LS {
    // help function to get data at LS
    getData(name) {
        let data;
        if(localStorage.getItem(name) === null) {
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(name));
        }
        return data
    }

    // help function to set data at LS
    setData(name, data) {
        localStorage.setItem("books", JSON.stringify(data));
    }

    addBook(book) {
        let books = this.getData("books")
        books.push(book);
        this.setData("books", books)
    }
}