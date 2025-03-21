import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../modal/modal.service';
import { UsersService } from '../../service/users.service';
import { MatButtonModule } from '@angular/material/button';
import { Users } from '../../model/users';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [RouterModule, MatFormField, MatInput, MatLabel, MatDialogContent, ReactiveFormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css',
  providers: [DatePipe] 
})

export default class DeleteUserComponent {
  deleteUserForm!: FormGroup;

  private readonly _fb = inject(FormBuilder);
  private readonly _modalService = inject(ModalService);
  private readonly _UsersService = inject(UsersService);
  private readonly datePipe = inject(DatePipe);
  private readonly _matDialog = inject(MAT_DIALOG_DATA);

   Users?: Users;
  @Input() IdGuid: string = this._matDialog;
    
  constructor(
    private usersService: UsersService
  ) {}
    

  ngOnInit(): void {    
    this.loadPage();   
    this._disableForm();  
  }

  loadPage(): void{
     this.usersService.getUserId(this.IdGuid).subscribe((data: Users) => {            
      if (data) {   
        this.deleteUserForm = this._fb.group({
          nombree4: [data.fullName, {disabled: true}],     
          birth: [this.datePipe.transform(data.birth, 'yyyy-MM-dd'), {disabled: true}],
          email: [data.email, {disabled: true}],
          id: data.id,
          fullName: [data.fullName, {disabled: true}],                             
        });       
        
        //this._disableForm();

      } else {
        console.error('No user data found');
      }
    }, error => {
      console.error('Error fetching user data', error);  
    });
  }    

  cerrarModal(): void {   
    this._modalService.closeModal();
  }  

  async onSubmit(){
 
    const dataDeleteUser = this.deleteUserForm.value;
    //this._UsersService.addUser(this.addUserForm.value);
    this._UsersService.deleteUser(dataDeleteUser).subscribe(dataDeleteUser => {
      alert("Usuario eliminado con éxito");
      this.cerrarModal();
    });
  }    


  private _disableForm(): void {
    this.deleteUserForm = this._fb.group({
      fullName: [{disabled: true}],
      birth: [{disabled: true}],
      email: [{disabled: true}]
    });
  }

}
