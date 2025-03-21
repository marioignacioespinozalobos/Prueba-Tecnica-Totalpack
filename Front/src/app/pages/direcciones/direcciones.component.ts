import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { MatButtonModule } from '@angular/material/button';
import { Direccion } from '../../model/direccion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direcciones',
  standalone: true,
  imports: [RouterModule, MatFormField, MatInput, MatLabel, MatDialogContent, ReactiveFormsModule, MatDialogModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './direcciones.component.html',
  styleUrl: './direcciones.component.css'
})

export class DireccionesComponent {

  direccionesForm!: FormGroup;

  @Input() IdGuid: string = "";
  private readonly _fb = inject(FormBuilder);

  Direcciones: Direccion[] = [];
    
      constructor(        
        private usersService: UsersService
      ) {}
    
      ngOnInit(): void {
        this.loadPage();
        this._buildForm();
        this.direccionesForm.value.direccion = "";
      }  
  
      loadPage(): void{
        this.usersService.getUsuarioDirecciones(this.IdGuid).subscribe((data: Direccion[]) => {          
          this.Direcciones = data;            
        })  
      }     
      
      private _buildForm(): void {
        this.direccionesForm = new FormGroup({
          direccion: new FormControl()            
        });
      }

      addDireccion(): void {
        
        if(this.direccionesForm.value.direccion.trim() == ""){
          alert("Debe ingresar una direccion");          
          return;
        }

        const dataDireccion = {
          idDireccion: "",
          nombreDireccion: this.direccionesForm.value.direccion,
          checkPrincipal: false,
          id: this.IdGuid
        };               
            
        this.usersService.addUserDirecciones(dataDireccion).subscribe(dataDirecciones => {
          this.ngOnInit();         
        });           
      }

      checkDireccion(idCiudad: string, direccion: string, checkPrincipal: boolean): void {
        
        if(checkPrincipal == true){
          checkPrincipal = false;
        }else{
          checkPrincipal = true;
        }

        const dataDireccion = {
          idDireccion:idCiudad,
          nombreDireccion: direccion,
          checkPrincipal: checkPrincipal,
          id: this.IdGuid
        };               
        
        this.usersService.editUserDirecciones(dataDireccion).subscribe(dataDirecciones => {
          this.ngOnInit();              
        });           
      }
    }
