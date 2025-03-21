import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../modal/modal.service';
import { UsersService } from '../../service/users.service';
import { MatButtonModule } from '@angular/material/button';
import { Users } from '../../model/users';
import { DatePipe } from '@angular/common';
import { DireccionesComponent } from '../direcciones/direcciones.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-select-user',
  standalone: true,
  imports: [RouterModule, MatFormField, MatInput, MatLabel, MatDialogContent, ReactiveFormsModule, MatDialogModule, MatButtonModule, DireccionesComponent],
  templateUrl: './select-user.component.html',
  styleUrl: './select-user.component.css',
  providers: [DatePipe] // Add DatePipe to providers
})

export class SelectUserComponent {
  editUserForm!: FormGroup;

  private readonly _fb = inject(FormBuilder);
  private readonly _modalService = inject(ModalService);
  private readonly _UsersService = inject(UsersService);
  private readonly datePipe = inject(DatePipe);
  private readonly _matDialog = inject(MAT_DIALOG_DATA);

  @Input() IdGuid: string = this._matDialog;

  Users?: Users;
    
  constructor(
    private usersService: UsersService,   
  ) {}
    
  ngOnInit(): void {
    this._buildForm(); 
    this.loadPage();       
  }

  loadPage(): void{
     this.usersService.getUserId(this.IdGuid).subscribe((data: Users) => {
      
      if (data) {       
        
        this.editUserForm = this._fb.group({
          fullName: data.fullName,
          birth: this.datePipe.transform(data.birth, 'yyyy-MM-dd'),
          email: data.email,
          id: data.id             
        });       
        
      } else {
        console.error('No user data found');
      }
    }, error => {
      console.error('Error fetching user data', error);  
    });
  }  


  private _disableForm(): void {
    this.editUserForm.disable();
  }

  private _buildForm(): void {

    this.editUserForm = this._fb.nonNullable.group({
      fullName: ['', Validators.required],
      birth: ['', Validators.required],
      email: ['', Validators.required]       
    });
  }

  cerrarModal(): void {   
    this._modalService.closeModal();
  }  

  async onSubmit(){
 
    const dataEditUser = this.editUserForm.value;
    //this._UsersService.addUser(this.addUserForm.value);
    this._UsersService.editUser(dataEditUser).subscribe(dataEditUser => {
      alert("Usuario creado con éxito");
    });
  }    
}
