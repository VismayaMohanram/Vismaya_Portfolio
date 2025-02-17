import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private toastr: ToastrService) {}

  submitForm() {
    const serviceId = 'service_p92b6z5'; // EmailJS Service ID
    const templateId = 'template_u3z3js8'; // EmailJS Template ID
    const userId = 'b8n86sUTdb8kTXWmT'; // EmailJS User ID

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        () => {
          this.toastr.success('Your message has been sent successfully!', 'Success');
          this.formData = { name: '', email: '', message: '' }; // Reset form
        },
        (error) => {
          this.toastr.error('There was an error sending your message. Please try again.', 'Error');
          console.error('EmailJS Error:', error);
        }
      );
  }
}
