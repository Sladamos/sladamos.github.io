import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  mod(n: number, m: number): number {
    return ((n % m) + m) % m;
  }
}
