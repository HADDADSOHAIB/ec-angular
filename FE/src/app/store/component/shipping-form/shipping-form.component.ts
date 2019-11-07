import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../../service/cart-service/cart.service';
import { take } from 'rxjs/Operators';
import { OrderService } from '../../service/order-service/order.service';
import { Order } from '../../../core/Models/order';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/Models/cart';
import { ShippingInfos } from 'src/app/core/Models/shipping-info';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {
  form: FormGroup;
  cart: Cart;
  shippingInfo: ShippingInfos;
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartService.cartStatus().pipe(take(1)).subscribe(cart=>this.cart=cart);
    this.form=this.formBuilder.group({
      firstName:['',Validators.required],
      lasttName:['',Validators.required],
      phoneNumber:['',Validators.required],
      addressName:['',Validators.required]
    });
  }

  placeOrder(){
    this.shippingInfo=new ShippingInfos(
      this.form.get('firstName').value,
      this.form.get('lastName').value,
      this.form.get('phoneName').value,
      this.form.get('addressName').value
    );
    
    this.orderService.placeOrder(new Order(this.cart,this.shippingInfo));
  }

  goStore(){
    this.router.navigate(["store"]);
  }

  goCart(){
    this.router.navigate(["store/checkout"]);
  }
}
