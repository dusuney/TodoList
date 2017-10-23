import { Component, OnInit } from "@angular/core";
import { Task } from '../Task';
import { TaskService } from "../task.service";

@Component({
    selector: "tasks",
    templateUrl: "./build/app/tasks/tasks.component.html"
})
export class TasksComponent {
    tasks: Task[];

    ngOnInit() {
        console.log("Application component initialized ...1");
        this.taskService.getAll()
            .then(data => this.tasks = data);
    }

    constructor(private taskService: TaskService) { }
} 