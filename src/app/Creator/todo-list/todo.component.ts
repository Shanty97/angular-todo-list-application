import { Component } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  listOfTodos: Todo[]

  constructor() {
    this.listOfTodos = [
      {
        srno: 1,
        title: "First Dummy Task",
        content: "Drink 2L water",
        active: true  
      },
      {
        srno: 2,
        title: "Second Dummy Task",
        content: "Go for a walk",
        active: true  
      },
      {
        srno: 3,
        title: "Third Dummy Task",
        content: "Take a nap",
        active: true  
      }
    ]
  }

  deleteSelectedTodo(todo: Todo) {
  console.log(todo.title, "deleted !")
  this.listOfTodos.splice(this.listOfTodos.indexOf(todo), 1)
}

}
