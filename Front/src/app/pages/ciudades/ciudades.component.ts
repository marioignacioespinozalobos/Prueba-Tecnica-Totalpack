import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { MatButtonModule } from '@angular/material/button';
import { Ciudades } from '../../model/ciudades';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ciudades',
  standalone: true,
  imports: [RouterModule, MatFormField, MatInput, MatLabel, MatDialogContent, ReactiveFormsModule, MatDialogModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './ciudades.component.html',
  styleUrl: './ciudades.component.css'
})
export class CiudadesComponent {

  direccionesForm!: FormGroup;

  @Input() IdGuid: string = "";
  private readonly _fb = inject(FormBuilder);

  Ciudades: Ciudades[] = [];
    
      constructor(        
        private usersService: UsersService
      ) {}
    
      ngOnInit(): void {
        this.loadPage();
        this._buildForm();
        this.direccionesForm.value.direccion = "";
      }  
  
      loadPage(): void{
        this.usersService.getUsuarioCiudades(this.IdGuid).subscribe((data: Ciudades[]) => {          
          this.Ciudades = data;            
        })  
      }     
      
      private _buildForm(): void {
        this.direccionesForm = new FormGroup({
          direccion: new FormControl('')            
        });
      }

      addDireccion(): void {
        
        const dataDirecciones = {
          idCiudad: "",
          nombreCiudad: this.direccionesForm.value.direccion,
          checkPrincipal: false,
          id: this.IdGuid
        };               
            
        this.usersService.addUserCiudades(dataDirecciones).subscribe(dataDirecciones => {
          this.loadPage();          
        });           
      }

      checkDireccion(idCiudad: string, ciudad: string, checkPrincipal: boolean): void {
        
       

        if(checkPrincipal == true){
          checkPrincipal = false;
        }else{
          checkPrincipal = true;
        }

        const dataDirecciones = {
          idCiudad:idCiudad,
          nombreCiudad: ciudad,
          checkPrincipal: checkPrincipal,
          id: this.IdGuid
        };               
        
        this.usersService.editUserCiudades(dataDirecciones).subscribe(dataDirecciones => {
          this.loadPage()          
        });           
      }

    }
