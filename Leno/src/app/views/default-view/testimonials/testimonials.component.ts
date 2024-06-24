import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Testimonial {
  title: string;
  text: string;
  imagePath: string;
}

@Component({
  selector: 'testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      title: "Samantha Samson",
      text: "Leno has truly transformed how I manage my time and health. Highly recommended!",
      imagePath: "/assets/testimonial-1.jpg"
    },
    {
      title: "Mike Johnson",
      text: "As a developer, I rely on Leno every day to keep me focused and energized. It's a game-changer!",
      imagePath: "/assets/testimonial-2.jpg"
    },
    {
      title: "Laney Smith",
      text: "With Leno, I've been able to achieve my goals faster and healthier than ever before. It's a must-have app!",
      imagePath: "/assets/testimonial-3.jpg"
    }
  ];
}
