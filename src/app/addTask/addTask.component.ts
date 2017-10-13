import {Component, OnInit} from "@angular/core";

@Component({
    selector: "add-task",
    templateUrl: "./app/addTask/addTask.component.html"
})
export class AddTaskComponent {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}