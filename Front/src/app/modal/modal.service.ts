import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  

@Injectable({providedIn: 'root'})
export class ModalService {
    
    private readonly _dialog =  inject(MatDialog);
    public respModel: boolean = false;


    openModal<CT, T = string>(componentRef: ComponentType<CT>, data?: T): Promise<boolean> {
       
        this._dialog.open(componentRef, {
            data: data,
            width: '90%',    
            height: '90%',                                  
        });  
        
        return new Promise<boolean>((resolve) => {
            this._dialog.afterAllClosed.subscribe(() => {
                this.respModel = true;
                resolve(this.respModel);
            });
        });

    }    

    closeModal(): void {
            this._dialog.closeAll();
    }
}