var formed = document.getElementById('addForm')
formed.addEventListener('submit', addItem)
var itemList=document.getElementById('listItem')
itemList.addEventListener('click' , removeItem)
// let formm=document.querySelector('#addForm')
// formm.addEventListener('click',save)

function addItem(e)
{
    e.preventDefault()
    var newItem = document.getElementById('name').value + ', ' +document.getElementById('describe').value+','+document.getElementById('cars').value
    var li=document.createElement('li')
    li.className='lists'
    li.appendChild(document.createTextNode(newItem))
    listItem.appendChild(li)
    var newButton = document.createElement('button')
newButton.className='butt delete'
newButton.appendChild(document.createTextNode('delt'))
li.appendChild(newButton)
listItem.appendChild(li)
var editButton=document.createElement('button')
editButton.className='butt'
editButton.appendChild(document.createTextNode('edit'))
li.appendChild(editButton)
listItem.appendChild(li)

var amount= document.getElementById('name').value;
var describe = document.getElementById('describe').value;
let obj = {
  amount,
  describe
}
localStorage.setItem(describe, JSON.stringify(obj))
}

function removeItem(e)
{
   if (e.target.classList.contains('delete')) {
       
       var amount1 = document.getElementById('name').value;
       var describe1 = document.getElementById('describe').value;
      
           var li = e.target.parentElement
           itemList.removeChild(li)
           let obj = {
            amount1,
            describe1
          }
          localStorage.removeItem(describe1,JSON.stringify(obj))
}
}

