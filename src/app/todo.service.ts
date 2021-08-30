import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { 

  }

  getTasks(){
    return this.http.get('http://localhost:8080/tasks');
  }
  
  getTask(id:number){

    return this.http.get('http://localhost:8080/task/'+id);
  }

  createTask(task:Task){
    return this.http.post('http://localhost:8080/task',task);
  }

  updateTask(task:Task,id:number){
    return this.http.put('http://localhost:8080/task/'+id,task);
  }

  deleteTask(id:number){
    return this.http.delete('http://localhost:8080/task/'+id,{responseType:'text'});
  }

}
