import { Injectable } from '@angular/core';
import { Task } from './task'
@Injectable()

export class TaskService {
    tasks: Task[]=[
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

    get(): Promise<Task[]> {
        
        return Promise.resolve(this.tasks);
    }

    create(task): Promise<Task> {
        return Promise.resolve(null);
    }

    update(): Task[] {
        return;
    }

    delete(): void {

    }
}