import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks:any;
  
  constructor(private todoservice:TodoService){

  }

  ngOnInit(){
    this.todoservice.getTasks().subscribe(data => this.tasks = data);
  }

  deleteTask(id:number){
    this.todoservice.deleteTask(id).subscribe(data=>alert('task deleted'));
    window.location.reload();
  }


}
