import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css'
})
export class ContactpageComponent {
  onSubmit() {
    alert("Formularen er blevet sendt!");
  }
}
