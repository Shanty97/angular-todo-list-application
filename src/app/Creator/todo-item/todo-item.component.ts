import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

@Input() todo: Todo
@Output() capturedTodoForDeletion: EventEmitter<Todo> = new EventEmitter()
@Output() capturedTodoForStatusUpdate: EventEmitter<Todo> = new EventEmitter()


/**
 * This method is called when a event is triggered.
 * This method is responsible for transmitting the captured todo object
 * from the UI to its parent Component where the original list of all Todos
 * is generated.
 * This transmission of the todo object is implemented using the following as
 * a custom event which can help the parent component's UI to consume the sent
 * data from its child component.
 * This transmission of the todo object is done using a EventEmitter
 * object which is repsonsible for serving the parent component with data.
 */
sendSelectedTodoForDeletion(todo: Todo) {
  console.log(todo.title)
  this.capturedTodoForDeletion.emit(todo)
}

onTaskCompleted(completedTodo: Todo, todo: Event) {
  completedTodo.active = false
  this.capturedTodoForStatusUpdate.emit(completedTodo)
}

}
