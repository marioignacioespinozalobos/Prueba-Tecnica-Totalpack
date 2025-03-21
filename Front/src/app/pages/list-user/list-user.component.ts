import { Component, EventEmitter, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { Users } from '../../model/users';
import { UsersService } from '../../service/users.service';
import { ModalService } from '../../modal/modal.service';
import AddUserComponent from '../add-user/add-user.component';
import { SelectUserComponent } from '../select-user/select-user.component';
import DeleteUserComponent from '../delete-user/delete-user.component';
import { NgxPaginationModule } from 'ngx-pagination'; 

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgxPaginationModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})

export default class ListUserComponent implements OnInit{

  Users: Users[] = [];
    
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
    
    p: number = 1;
    collection: any[] = []; 

    // ModalService
    private readonly _modalService = inject(ModalService);
    
    addUserModal(){

      this._modalService.openModal<AddUserComponent>(AddUserComponent).then((data: boolean) => {
       
        if(data){
          this.loadPage();          
        }      
      });
    }    
    
    getUserId(IdGuid: string){
      //this._modalService.openModal<SelectUserComponent>(SelectUserComponent, IdGuid);        
      
      this._modalService.openModal<SelectUserComponent>(SelectUserComponent, IdGuid).then((data: boolean) => {
       
        if(data){
          this.loadPage();
        }      
      });
    }     

    deleteUser(IdGuid: string){
      //this._modalService.openModal<DeleteUserComponent>(DeleteUserComponent, IdGuid);    
      
      this._modalService.openModal<DeleteUserComponent>(DeleteUserComponent, IdGuid).then((data: boolean) => {

        if(data){
          this.loadPage();          
        }      
      });
    }
}
