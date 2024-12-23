import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  submitForm() {
    alert('Thank you for reaching out! Your message has been received.');
    this.formData = { name: '', email: '', message: '' }; // Reset form
  }
}
