import { Component } from '@angular/core';

interface Feature {
  title: String,
  icon: String,
  description: String
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  features: Feature[] = [
    {
      title: "Real-Time Data",
      icon: "fa-rocket",
      description: "Access real-time data instantly, ensuring you're always up-to-date with the latest information. Whether it's market trends, user activity, or system performance metrics, stay informed with our real-time data solutions."
    },
    {
      title: "Simple Integration",
      icon: "fa-user",
      description: "Integrate our solutions seamlessly into your existing workflow with minimal effort. Our easy-to-use APIs and intuitive documentation make integration a breeze, allowing you to focus on what matters most - delivering value to your users."
    },
    {
      title: "Easy To Use",
      icon: "fa-code",
      description: "Experience unparalleled ease of use with our user-friendly interface and intuitive features. From beginners to experts, our platform is designed to cater to all skill levels, ensuring a smooth and hassle-free experience for everyone."
    },
    {
      title: "High Accuracy",
      icon: "fa-compass",
      description: "Rely on our high-precision algorithms and robust data processing techniques to deliver accurate insights every time. With our advanced technology and rigorous validation processes, you can trust that your data is always reliable and precise."
    },
    {
      title: "Reporting Tools",
      icon: "fa-chart-pie",
      description: "Empower your team with powerful reporting tools that provide actionable insights and in-depth analysis. From customizable dashboards to comprehensive reports, our reporting tools make it easy to track performance, identify trends, and make informed decisions."
    }
  ]

}
