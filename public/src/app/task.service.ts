import { Injectable } from '@angular/core';
import { Task } from './task'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class TaskService {
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

    constructor(private http: Http) { }

    private tasksUrl = 'api/tasks';
    private headers = new Headers({'Content-Type': 'application/json'});

    get(): Promise<Task[]> {

        return this.http.get(this.tasksUrl)
            .toPromise()
            .then(response => response.json().data as Task[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(task): Promise<Task> {
        console.log(task);
        return this.http
            .post(this.tasksUrl, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Task)
            .catch(this.handleError);
    }

    update(): Task[] {
        return;
    }

    delete(): void {

    }
}