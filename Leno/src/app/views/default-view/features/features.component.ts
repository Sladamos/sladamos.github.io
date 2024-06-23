import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface FeaturesItem {
  title: string,
  description: string,
  icon: string
}

@Component({
  selector: 'features',
  standalone: true,
  imports: [NgFor],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  leftFeatures: FeaturesItem[] = [
    {
      title: "Real-Time Data",
      description: "Access real-time data instantly, ensuring you're always up-to-date with the latest information.",
      icon: "fa-rocket"
    },
    {
      title: "Visual Editor",
      description: "Customize your workspace with our intuitive visual editor.",
      icon: "fa-code"
    },
    {
      title: "Refined Options",
      description: "Access a wide range of refined options to tailor Leno to your unique needs.",
      icon: "fa-gem"
    }
  ]

  rightFeatures: FeaturesItem[] = [
    {
      title: "Calendar Input",
      description: "Seamlessly integrate your calendar to stay organized and on track.",
      icon: "fa-calendar"
    },
    {
      title: "Easy Reading",
      description: "Enjoy distraction-free reading with Leno's clean and intuitive interface.",
      icon: "fa-book"
    },
    {
      title: "Good Foundation",
      description: "Leno is built on a solid foundation of user feedback and cutting-edge technology.",
      icon: "fa-cube"
    }
  ]

}
