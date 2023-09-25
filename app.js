const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const ul = document.querySelector("#list")

function todo(e){
    if(input.value == ""){
        alert("Enter Any Task")

    }
    else{
    e.preventDefault();
    let li = document.createElement('LI')
    let text = document.createTextNode(input.value)
    li.appendChild(text)
    ul.appendChild(li)
    const Delete = createElement("button" , "Delete")
    li.appendChild(Delete)
    Delete.setAttribute("onclick", "Delete(this)")
    const edit = createElement("button" , "Edit")
    edit.setAttribute("onclick", "edit(this)")
    li.appendChild(edit)
    }

}
function Delete(element){
    ul.removeChild(element.parentNode)

}
function edit(element){
    const edited = prompt("Enter Your Task")
    if(edited != ""){
        element.parentNode.childNodes[0].nodeValue = edited
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
