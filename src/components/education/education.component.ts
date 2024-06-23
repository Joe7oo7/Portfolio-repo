import { AfterViewInit, Component, OnInit } from '@angular/core';
import Rellax from 'rellax';
import vanillaTilt from 'vanilla-tilt';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent{


onMouseOver(rightItemId: string) {
  const element = document.getElementById(rightItemId);
  if (element) {
    element.classList.add('scale-up');
  }
}

onMouseOut(rightItemId: string) {
  const element = document.getElementById(rightItemId);
  if (element) {
    element.classList.remove('scale-up');
  }
}
}



