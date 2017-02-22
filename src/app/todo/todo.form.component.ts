import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: 'todo.form.template.html'
})
export class TodoForm {

    private todo = {text: ''};
    private todoService;

    constructor(private ts:TodoService) {
        this.todoService = ts;
    }

    add() {
        if (this.todo.text) {
            this.todoService.add(this.todo.text);
            this.todo.text = '';
        }
    }

}
