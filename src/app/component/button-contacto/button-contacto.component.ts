import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-contacto',
  imports: [CommonModule, FormsModule],
  templateUrl: './button-contacto.component.html',
  styleUrls: ['./button-contacto.component.css']
})
export class ButtonContactoComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitForm() {
    alert('Enviado');
  }
}
