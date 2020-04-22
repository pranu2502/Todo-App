const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
var total = 0
var unchecked = 0
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let new_todo = prompt("Enter your new task")

  add_todo(new_todo)
}

function update(total,unchecked)
{
  itemCountSpan.innerHTML = "" + total
  uncheckedCountSpan.innerHTML = "" + unchecked
}


function add_todo(name)
{ 
  total += 1
  unchecked += 1
  update(total,unchecked);
  let todo = document.createElement("li")
  let node = document.createTextNode(name)
  todo.append(node)
  list.append(todo)
}
