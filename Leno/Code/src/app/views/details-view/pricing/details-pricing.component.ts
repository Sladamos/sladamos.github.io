import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DolarPriceFormatterPipe } from '../../../utils/pipe/dolar-price-formatter.pipe';

interface Card {
  title: string,
  price: number,
  items: string[]
}

@Component({
  selector: 'details-pricing',
  standalone: true,
  imports: [NgFor, RouterModule, DolarPriceFormatterPipe],
  templateUrl: './details-pricing.component.html',
  styleUrl: './details-pricing.component.css'
})
export class DetailsPricingComponent {

  notes: string[] = [
    " * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, temporibus! ",
    " * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, temporibus Lorem ipsum dolor sit amet. ",
    " * Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam rem magnam, mollitia autem tempora. "
  ];

  cards: Card[] = [
    {
      title: "Standard",
      price: 0,
      items: [
        "Unlimited access to all features",
        "24/7 Customer Support",
        "1GB Storage",
        "Cancel Anytime"
      ]
    },
    {
      title: "Advanced",
      price: 19,
      items: [
        "Unlimited access to all features",
        "24/7 Customer Support",
        "5GB Storage",
        "Cancel Anytime"
      ]
    },
    {
      title: "Complete",
      price: 29,
      items: [
        "Unlimited access to all features",
        "24/7 Customer Support",
        "10GB Storage",
        "Cancel Anytime"
      ]
    }
  ];

}
