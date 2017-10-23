import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";
import { Task } from "../task";
import { Router } from "@angular/router";

@Component({
    selector: "add-task",
    templateUrl: "./build/app/addTask/addTask.component.html"
})
export class AddTaskComponent {
    task: Task = { id: null, name: '', text: '' };

    ngOnInit() {
        console.log("Application component initialized ...");
    }

    addTask(): void {
        console.log(this.task);
        this.taskService.create(this.task)
            .then(task => { this.router.navigate(['tasks']);});
    }

    constructor(private taskService: TaskService, private router: Router) { }
}