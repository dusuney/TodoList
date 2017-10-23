import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Task } from '../Task';
import { Router } from "@angular/router";

@Component({
    selector: "view-task",
    templateUrl: "./build/app/viewTask/viewTask.component.html"
})
export class ViewTaskComponent {
    public task: Task = {
        id: null,
        name: '',
        text: ''
    };

    public id: any;

    ngOnInit() {
        console.log("Application component initialized ...2");

        this.route.params.subscribe((params: ParamMap) => {
            this.id = params['id'];
            console.log(this.id);
        });

        this.taskService.getTask(+this.id).then(task => this.task = task);
    }

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    private removeTask(): void {
        this.taskService.remove(this.id).then(() => { this.router.navigate(['tasks']);});

    }

    private updateTask(): void {
        this.taskService.update(this.task).then(() => { this.router.navigate(['tasks']);});
    }
} 