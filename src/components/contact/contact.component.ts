import { CommonModule } from '@angular/common';
import Rellax from 'rellax';
import { AfterViewInit, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EmailJSResponseStatus } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent  {
// ngx formly

  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [

// Name field
    {
     
      key: 'from_name',
      type: 'input',
      className: 'form-group custom-group custom-label',
      templateOptions: {
        attributes: {
          style: '',
          autocomplete:'off',
          class: 'form-control  custom-control',
        },
        label: 'Name',
        placeholder: 'Enter your Name',
        required: true,
       
      },
    },

// Email field

    {
      key: 'from_email',
      type: 'input',
      className: 'form-group custom-group custom-label',
      templateOptions: {
        attributes: {
          autocomplete:'off',
          class: 'form-control custom-control custom-label',
        },
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your Email',
        required: true,
    
      },

      validators: {
        validation: [Validators.email],
      },
      validation: {
        messages: {
          required: 'Email is required',
          email: 'Invalid email address',
        },
      },
    },

// Subject field

    {
      key: 'subject',
      type: 'input',
      className: 'form-group custom-group custom-label',
      templateOptions: {
        attributes: {
          autocomplete:'off',
          style: '',
          class: 'form-control  custom-control custom-placeholder ',
        },
       
        label: 'Subject',
        placeholder: 'Enter your Subject',
        required: true,
      },
    },

// Message field

    {
      key: 'message',
      type: 'textarea',
      className: 'form-group  custom-label',
      templateOptions: {
        attributes: {
          style: 'min-height:80px;',
          autocomplete:'off',
          class: 'form-control  custom-control custom-placeholder',
        },
        label: 'Message',
        placeholder: 'Enter Your Message ',
        required: true,

      },
    },
  ];

// emailjs starts

  constructor() {
    emailjs.init('mR6LGHCOuWNaOyPv9'); 
  }
  onSubmit() {
    if (this.form.valid) {
      emailjs
        .send('Jose7o7', 'Jose7oo7', this.model)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((error) => {
          console.error('FAILED...', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }
}