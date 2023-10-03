
var ul = document.getElementById('ul')

loadItemsFromLocalStorage();


function foo (){
    
    var a = document.getElementById('inp')
    if (a.value === ""){
        alert("You must write something!")
    }
    else{
    var li = document.createElement('li')
    var litext = document.createTextNode (a.value)
    li.appendChild(litext)
    ul.appendChild(li)
    li.setAttribute('class','line')
    var editbtn = document.createElement('i')
    li.appendChild(editbtn)
    var deletebtn = document.createElement('i')
    // var deletebtnText = document.createTextNode('Delete')
    // deletebtn.appendChild(deletebtnText)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick','del(this)')
    deletebtn.setAttribute('class','fa-sharp fa-solid fa-trash del')
    // var editbtnText = document.createTextNode('Edit')
    // editbtn.appendChild(editbtnText)
    editbtn.setAttribute('onclick','edit(this)')
    editbtn.setAttribute('class','bx bxs-edit edit')

    saveItemsToLocalStorage();
    

}
a.value = ''
}
function deleteall(){
    ul.innerHTML = ''
    localStorage.removeItem('todo');
}
function del(e){
     e.parentNode.remove()
     saveItemsToLocalStorage();
}
function edit(e){
    var userInp = prompt("Enter Edit Value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = userInp
    saveItemsToLocalStorage();
}

function loadItemsFromLocalStorage() {
    var storedItems = localStorage.getItem('todo');
    if (storedItems) {
        ul.innerHTML = storedItems; 
    }
}

function saveItemsToLocalStorage() {
    var itemsToSave = ul.innerHTML; 
    localStorage.setItem('todo', itemsToSave); 
}







