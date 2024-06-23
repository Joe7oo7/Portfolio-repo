import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutComponent } from '../components/about/about.component';

import 'bootstrap5/src/js/bootstrap.bundle.min.js';
import 'popper.js/dist/popper.min.js';
import 'jquery/dist/jquery.min.js';
import  annyang  from 'annyang'; 'annyang/dist/annyang.min.js'

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { VoiceCommandService } from '../services/voice-command.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    ReactiveFormsModule,
    FormlyModule,
    FooterComponent,
    NavbarComponent,
    FormlyBootstrapModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // constructor(public voiceCommandService: VoiceCommandService) {}
}
