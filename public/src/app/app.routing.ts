import { Routes, RouterModule } from "@angular/router";
import { AddTaskComponent } from "./addTask/addTask.component";
import { ViewTaskComponent } from "./viewTask/viewTask.component";
import { ModuleWithProviders } from "@angular/core";
import { TasksComponent } from "./tasks/tasks.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent, data: { title: 'Tasks' } },
    { path: 'addTask', component: AddTaskComponent, data: { title: 'AddTask' } },
    { path: 'viewTask/:id', component: ViewTaskComponent, data: { title: 'ViewTask' } }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
