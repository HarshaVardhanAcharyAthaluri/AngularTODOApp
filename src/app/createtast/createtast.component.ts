import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-createtast',
  templateUrl: './createtast.component.html',
  styleUrls: ['./createtast.component.css']
})
export class CreatetastComponent {

  task = {
    "user":'',
    "taskName":'',
    "duration":''
  }

  constructor(private todo:TodoService,private appcompo:AppComponent) { }

  createTask(task:Task){
    this.todo.createTask(task).subscribe(data=>{
        this.appcompo.ngOnInit();
    });
  }



 
}
