import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {OrderModel} from '../model/order.model';
import {OrderService} from '../service/order.service';

@Injectable()
export class ResolveOrderList implements Resolve<OrderModel[]> {
  constructor(private orderService: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.orderService.findOrderAll();
  }
}
