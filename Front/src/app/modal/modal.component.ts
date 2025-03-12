import { Component } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatFormField, MatInput, MatLabel, MatDialogContent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

}