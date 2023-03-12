import { Component } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  listOfTodos: Todo[]
  fromTodoStorage: string

  constructor() {
    this.listOfTodos = []
    this.fromTodoStorage = localStorage.getItem("todoStorage")
    if (this.fromTodoStorage != null) {
      this.listOfTodos = JSON.parse(this.fromTodoStorage)
    } else {
      this.listOfTodos = []
    }
  }

deleteSelectedTodo(todo: Todo) {
  console.log(todo.title, "deleted !")
  this.listOfTodos.splice(this.listOfTodos.indexOf(todo), 1)
  this.persistTodoListToStorage(this.listOfTodos)
}

addNewTodo(todo: Todo) {
  console.log(todo.title, todo.content, "from todo-list")
  this.listOfTodos.push(todo)
  this.persistTodoListToStorage(this.listOfTodos)
}

updateTodoStatus(todo: Todo) {
  this.listOfTodos[this.listOfTodos.indexOf(todo)].active = !this.listOfTodos[this.listOfTodos.indexOf(todo)]
  this.persistTodoListToStorage(this.listOfTodos)
}

persistTodoListToStorage(listOfTodosToPersist: Todo[]) {
  localStorage.setItem("todoStorage", JSON.stringify(listOfTodosToPersist))
}

}
