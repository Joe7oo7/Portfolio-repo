import { AfterViewInit, Component, ElementRef, OnInit, OnDestroy,ViewChild } from '@angular/core';
import * as vis from 'vis-timeline/standalone';
import vanillaTilt from 'vanilla-tilt';
import { CommonModule } from '@angular/common';
interface SliderItem {
  image: string;
  design: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit{
  items: SliderItem[] = [
    {
      image: '/assets/backgrounds/29371.jpg',
      design: '',
      title: 'Josephrex',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.'
    },
    {
      image: '/assets/backgrounds/29371.jpg',
      design: '',
      title: 'Josephrex',
      description: 'I am Josephrex.Iam a BE ComputerScience Engineering Graduate.I have a Skilled Knowledge About Full Stack Web Development with Django and React'
    },
    {
      image: '/assets/backgrounds/29371.jpg',
      design: '',
      title: 'Josephrex',
      description: 'I am Josephrex.Iam a BE ComputerScience Engineering Graduate.I have a Skilled Knowledge About Full Stack Web Development with Django and React'
    },
    {
      image: '/assets/backgrounds/29371.jpg',
      design: '',
      title: 'Josephrex',
      description: 'I am Josephrex.Iam a BE ComputerScience Engineering Graduate.I have a Skilled Knowledge About Full Stack Web Development with Django and React'
    },
    {
      image:'/assets/backgrounds/12874600_9Z_2102.w026.n002.120B.p1.120.jpg',
      design: '',
      title: 'Josephrex',
      description: 'I am Josephrex.Iam a BE ComputerScience Engineering Graduate.I have a Skilled Knowledge About Full Stack Web Development with Django and React'
    }
  ];
  
  thumbnails = this.items; // Assuming thumbnails are the same as items for simplicity
  itemActive: number = 0;
  refreshInterval: any;


 ngOnInit(){
  this.setupInterval();

  // tilt effects starts
  const boxElement = document.querySelector('.home-img') as HTMLElement;

  vanillaTilt.init(boxElement, {
    max: 12,
    speed: 200,
    glare: false,
  });  
  // tilt effects ends
}
ngOnDestroy(): void {
  clearInterval(this.refreshInterval);
}
setupInterval() {
  this.refreshInterval = setInterval(() => {
    this.nextClick();
  }, 5000);
}

nextClick(): void {
  this.itemActive = (this.itemActive + 1) % this.items.length;
  this.showSlider();
}

prevClick(): void {
  this.itemActive = (this.itemActive - 1 + this.items.length) % this.items.length;
  this.showSlider();
}

showSlider(): void {
  clearInterval(this.refreshInterval);
  this.setupInterval();
}

onThumbnailClick(index: number): void {
  this.itemActive = index;
  this.showSlider();
}
}