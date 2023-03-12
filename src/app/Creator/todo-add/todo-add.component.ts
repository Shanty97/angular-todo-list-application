import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

@Output() sendNewTodoToParent: EventEmitter<Todo> = new EventEmitter();


addTodoTitle: string;
addTodoContent: string;

onCreateTodo() {
  console.log(this.addTodoTitle,this.addTodoContent)
  const newCreatedTodo =
    {
      srno: 99,
      title: this.addTodoTitle,
      content: this.addTodoContent,
      active: true
    }

  this.sendNewTodoToParent.emit(newCreatedTodo)
  this.addTodoTitle = ""
  this.addTodoContent = ""
}

}
