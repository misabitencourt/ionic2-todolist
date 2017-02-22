import { Component, ViewChild, NgZone } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo.list.template.html'
})
export class TodoList {

    private todoList;
    private todoService;

    constructor(private ts:TodoService) {
        this.todoService = ts;
        this.todoList = this.ts.getAll();
    }

}
