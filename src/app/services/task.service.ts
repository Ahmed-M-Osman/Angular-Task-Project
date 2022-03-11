import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = '${this.apiUrl}/${task.id}';
    console.log("Task Deleted!!!" + url)
    return this.http.delete<Task>('http://localhost:3000/tasks/4');
  }
}
