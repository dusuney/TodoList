import { Injectable } from '@angular/core';
import { Task } from './task'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class TaskService {
    
    constructor(private http: Http) { }

    private tasksUrl = 'api/tasks';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    getAll(): Promise<Task[]> {

        return this.http.get(this.tasksUrl)
            .toPromise()
            .then(response => response.json().data as Task[])
            .catch(this.handleError);
    }


    getTask(id: number): Promise<Task> {
        const url = `${this.tasksUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Task)
            .catch(this.handleError);
    }

    create(task): Promise<Task> {
        console.log(task);
        return this.http
            .post(this.tasksUrl, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Task)
            .catch(this.handleError);
    }

    update(task: Task): Promise<Task> {
        const url = `${this.tasksUrl}/${task.id}`;

        return this.http
            .put(url, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Task)
            .catch(this.handleError);
    }

    remove(id: number): Promise<Task> {
        const url = `${this.tasksUrl}/${id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Task)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}