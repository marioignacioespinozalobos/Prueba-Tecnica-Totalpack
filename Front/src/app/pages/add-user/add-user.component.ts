import { Component, inject, OnInit } from '@angular/core';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../modal/modal.service';
import { UsersService } from '../../service/users.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterModule, MatFormField, MatInput, MatLabel, MatDialogContent, ReactiveFormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export default class AddUserComponent implements OnInit {

  addUserForm!: FormGroup;

  private readonly _fb = inject(FormBuilder);
  private readonly _modalService = inject(ModalService);
  private readonly _UsersService = inject(UsersService);
  divAddUsuario: any;

  ngOnInit(): void {
    this._buildForm();     
  }

  private _disableForm(): void {
    this.addUserForm.disable();
  }

  private _buildForm(): void {

    this.addUserForm = this._fb.nonNullable.group({
      fullName: ['', Validators.required],
      birth: ['', Validators.required],
      email: ['', Validators.required]       
    });
  }

  cerrarModal(): void {   
    this._modalService.closeModal();
  }  

  async onSubmit(){
    const dataAddUser = this.addUserForm.value;

    //this._UsersService.addUser(this.addUserForm.value);
    this._UsersService.addUser(dataAddUser).subscribe(dataAddUser => {
      alert("Usuario creado con éxito");
      this.cerrarModal();
    });
  }    
}
