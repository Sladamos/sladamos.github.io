import {Injectable} from '@angular/core';
import {IssuerModel} from '../model/issuer-model';

@Injectable({
  providedIn: 'root'
})
export class IssuerService {

  private issuers: IssuerModel[] = [
    {
      name: 'Udemy',
      iconUrl: 'issuer_udemy.jpg'
    }
  ];

  getIssuer(name: string): IssuerModel {
    return this.issuers.find(issuer => issuer.name === name)!;
  }
}
