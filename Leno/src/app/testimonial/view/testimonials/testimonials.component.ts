import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../model/testimonial';
import { title } from 'process';
import { text } from 'stream/consumers';
import { NgFor } from '@angular/common';

@Component({
  selector: 'testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];

  ngOnInit(): void {
    let testimonial: Testimonial = {
      title: "Samantha Samson",
      text: "Leno has truly transformed how I manage my time and health. Highly recommended!",
      imagePath: "/assets/testimonial-1.jpg"
    };
    this.testimonials.push(testimonial);
    testimonial = {
      title: "Mike Johnson",
      text: "As a developer, I rely on Leno every day to keep me focused and energized. It's a game-changer!",
      imagePath: "/assets/testimonial-2.jpg"
    };
    this.testimonials.push(testimonial);
    testimonial = {
      title: "Laney Smith",
      text: "With Leno, I've been able to achieve my goals faster and healthier than ever before. It's a must-have app!",
      imagePath: "/assets/testimonial-3.jpg"
    };
    this.testimonials.push(testimonial);
  }

}
