import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  placeOrder(arg0: import("../../../core/Models/order").Order) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
