import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RestService } from '../../services/rest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-help',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-help.component.html',
  styleUrl: './contact-help.component.css'
})
export class ContactHelpComponent {
  @Output() close = new EventEmitter<void>();

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor(private rest: RestService) { }

  sendEmail() {
    // Implement email sending logic here
    // This will likely involve calling a method in RestService
    // For now, let's just log the data
    console.log('Sending email:', {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    });

    // Simulate API call
    this.rest.post('/send-help-email.php', {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    }).then(() => {
      this.rest.showSuccess('Mensaje enviado con éxito!');
      // Clear form
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }).catch(error => {
      this.rest.showError('Error al enviar el mensaje: ' + this.rest.getErrorMessage(error));
    });
  }

  onClose() {
    this.close.emit();
  }
}
