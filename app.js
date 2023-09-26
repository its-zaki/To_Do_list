const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const ul = document.querySelector("#list")

function todo(e){
    if(input.value == ""){
        alert("Enter Any Task")

    }
    else{
    e.preventDefault();
    // const ul = createElement("UL")
    // ul.appendChild("li") 
    let li = document.createElement('LI')
    let text = document.createTextNode(input.value)
    li.appendChild(text)
    ul.appendChild(li)
    li.setAttribute("class", "li-div")
    const Delete = createElement("button" , "Delete")
    // li.appendChild(Delete)
    Delete.setAttribute("onclick", "Delete(this)")
    Delete.setAttribute("class", "del")
    const edit = createElement("button" , "Edit")
    edit.setAttribute("onclick", "edit(this)")
    edit.setAttribute("class", "edit")
    // li.appendChild(edit)
    const div = createElement("DIV", "")
    div.appendChild(Delete)
    div.appendChild(edit)
    li.appendChild(div)
    input.value =""
}

}
function Delete(element){
    // console.log(element.parentNode.parentNode);
    ul.removeChild(element.parentNode.parentNode)

}
function edit(element){
    const edited = prompt("Enter Your Task")
    if(edited != ""){
        element.parentNode.parentNode.childNodes[0].nodeValue = edited
    }
    else{
        alert("Enter Any Text")
    }

}

function createElement(userElement, userText){
    let element = document.createElement(userElement)
    let text = document.createTextNode(userText)
    element.appendChild(text)
    return element
}
