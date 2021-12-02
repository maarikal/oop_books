// võib kasutada sama nime, et samal funktsionaalsusel oleks sama nimi
class UI {
    // help function to add DOM element
    addUIElement(name, classname = "", textcontent = "", atributes = {}) {
        // create element
        const element = document.createElement(name);
        // add class to element
        if(classname !== "") {
            element.className = classname
        }
        // add text content to element
        element.appendChild(document.createTextNode(textcontent))
        // add atributes to element
        if(Object.keys(atributes).length > 0) {
            for (let key in atributes) {
                element.setAttribute(key, atributes[key])
            }
        }
        return element
    }


    addBook(book) {
        const tr = this.addUIElement("tr");
        // kasutasime for tsüklit, kuna objektil ei ole indekseid
        for(let name in book) {
        let td = this.addUIElement("td", "", book[name]);
        tr.appendChild(td);
        }
         // loome lingitava elemendi ja lingi atribuudi
        const link = this.addUIElement("a", "", "X", {"href": "#"});
        tr.appendChild(link);
        const bookInput = document.querySelector("#nimekiri")
        bookInput.appendChild(tr);
    }
}