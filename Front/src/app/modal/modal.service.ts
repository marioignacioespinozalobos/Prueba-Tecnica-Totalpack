import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  

@Injectable({providedIn: 'root'})
export class ModalService {
    
    private readonly _dialog =  inject(MatDialog);

    openModal<CT, T = string>(componentRef: ComponentType<CT>, data?: T, isEditing = false): void {
       
        this._dialog.open(componentRef, {
            data: data,
            width: '90%',    
            height: '90%',                                  
        });
    }    

    closeModal(): void {
            this._dialog.closeAll();
    }
}