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
  contactInfo = {
    email: 'vm@hawk.iit.edu',
    phone: '+1 (872)-258-8900',
    linkedin: 'https://www.linkedin.com/in/vismayam/',
    github: 'https://github.com/VismayaMohanram',
    social: {
      instagram: 'https://instagram.com/your_instagram_handle',
      twitter: 'https://twitter.com/your_twitter_handle',
    },
  };

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
        (response) => {
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
