import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import Typed from 'typed.js';
import vanillaTilt from 'vanilla-tilt';

declare var particlesJS: any;

import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule,
} from '@ngx-formly/core';
import { config } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FormlyModule,
    FormlyBootstrapModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit() {
    // tilt effect

    const boxElement = document.querySelector('.box') as HTMLElement;

    if (boxElement) {
      vanillaTilt.init(boxElement, {
        max: 18,
        speed: 200,
        glare: false,
      });
    }

// typing-text
    const options = {
      strings: ['FullStack Developer', 'WebDesigner', 'Youtuber'],
      typeSpeed: 30,
      backSpeed: 20,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };
    const typed = new Typed('.typing-text', options);
  }

}
