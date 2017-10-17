import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";

@Component({
    selector: "view-task",
    templateUrl: "./build/app/viewTask/viewTask.component.html"
})
export class ViewTaskComponent {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
} 