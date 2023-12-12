import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addsprint',
  templateUrl: './addsprint.component.html',
  styleUrls: ['./addsprint.component.css']
})
export class AddsprintComponent implements OnInit {
myModal:any
tasks: any[] = [];
sprintnum:any=0
newTask: any = {};
sprints:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getsprints()
    var element = document.getElementById('user-form-modal') as HTMLElement;
 this.myModal = new Modal(element);
  }
  openModal(){
    this.myModal.show();
  }
  
  
  onCloseHandled(){
    this.myModal.hide();
  
  }
  
  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = {};
  }

  editTask(index: number) {
    // Mettez en œuvre la logique d'édition ici
  }

  saveTask(index: number) {
    // Mettez en œuvre la logique de sauvegarde ici
  }

  cancelEdit(index: number) {
    // Mettez en œuvre la logique d'annulation ici
  }
addsprint(){

  this.sprintnum+=1
  console.log(this.sprintnum)
}
getsprints(){
  return this.http.get("http://localhost:9090/getsprints").subscribe({
    next: (res) => { this.sprints=res},
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
}
}
