import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DecimalNumberFormatterPipe } from '../../../utils/pipe/decimal-number-formatter.pipe';
import { RouterModule } from '@angular/router';

export interface DetailsIcon {
  icon: string,
  amount: number,
  title: string
}

@Component({
  selector: 'default-details',
  standalone: true,
  imports: [RouterModule, NgFor, DecimalNumberFormatterPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  icons: DetailsIcon[] = [
    {
      icon: 'fa-users',
      amount: 55000,
      title: 'Happy Customers'
    },
    {
      icon: 'fa-code',
      amount: 585,
      title: 'Issues Solved'
    },
    {
      icon: 'fa-comments',
      amount: 788,
      title: 'Good Reviews'
    },
    {
      icon: 'fa-rocket',
      amount: 100,
      title: 'Case Studies'
    },
    {
      icon: 'fa-edit',
      amount: 110,
      title: 'Press Article'
    }
  ]

}
