import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})

export class AppComponent {
/*
  Users?: Users[] = [];

  constructor(
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(): void{
    this.usersService.getAll().subscribe((data: Users[]) => {
      this.Users = data;            
    })  
  }     
  
    getUser(Guid: string){
    }

    addtUser(){
      
    }
    deleteUser(Guid: string){

    }
    */
}
