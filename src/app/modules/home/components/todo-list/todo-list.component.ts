import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {
      task: "minha nova task",
      checked: true
    },
    {
      task: "minha nova task 2",
      checked: false
    }
  ];

  ngOnInit(): void {

  }
}
