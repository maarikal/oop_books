// võib kasutada sama nime, et samal funktsionaalsusel oleks sama nimi
class UI {
    addBook(book) {
        const tr = document.createElement("tr");
        // kasutasime for tsüklit, kuna objektil ei ole indekseid
        for(let name in book) {
            console.log(name + " " + book[name])
        let td = document.createElement("td");
        let tekst = document.createTextNode(book[name]);
        td.appendChild(tekst);
        tr.appendChild(td);
        tr.appendChild(td);
        console.log(tr)
        }
         // loome lingitava elemendi ja lingi atribuudi
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        link.className = "secondary-content";
        link.appendChild(document.createTextNode("X"));  // loome kustutamise nupu (X-i)
        tr.appendChild(link);
        const bookInput = document.querySelector("#nimekiri")
        bookInput.appendChild(tr);
    }
}