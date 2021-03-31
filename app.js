var list = document.getElementById("list");
function addtodo(){
    var todo_item = document.getElementById("todo-item")
var li = document.createElement("li")
var litext = document.createTextNode(todo_item.Value)
li.appendChild(litext)
var delBtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delBtn.setAttribute("onclick","deleteaiatem(this)")
delBtn.appendChild(delText)
var editBtn = document.createElement("button")
var editBtn = document.createTextNode('EDIT')
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editText)
li.appendChild(delBtn)
li.appendChild(editBtn)
list.appendChild(li)
todo_item.Value = ""
console.log(li)
}

s
function deleteItem(e){
    webkitCancelAnimationFrame.parentnode.firstchild.nodeValue
    var editValue = prompt("ENTER edit value",Val)
e.parentnode.firstchild.nodeValue = editValue
}

funtion deletALL(){
    list.innerHTML = ""
}










