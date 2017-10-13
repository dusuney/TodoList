import { Component, OnInit } from "@angular/core";
import { Task } from '../Task';
@Component({
    selector: "tasks",
    templateUrl: "./app/tasks/tasks.component.html"
})
export class TasksComponent {
    ngOnInit() {
        console.log("Application component initialized ...");
    }

    tasks: Task[] = [
        {
            id: 0,
            name: "Item 1",
            text: "Text..."
        },
        {
            id: 1,
            name: "Item 2",
            text: "Text..."
        },
        {
            id: 2,
            name: "Item 2",
            text: "Text..."
        }
    ];

   
} 