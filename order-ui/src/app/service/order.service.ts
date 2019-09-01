import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';
import {OrderModel} from '../model/order.model';

@Injectable()
export class OrderService {
  constructor(private http: Http) {
  }

  findOrderAll(): Observable<OrderModel[]> {

    const headers = new Headers();
    headers.append('', 'application/json');

    return this.http.get('http://localhost:3000/view-order', {headers}).map(res => res.json());
  }

  getSpecificOrder(orderId: number): Observable<OrderModel> {

    const headers = new Headers();
    headers.append('', 'application/json');

    return this.http.get('http://localhost:3000/view-specific-order/' + orderId, {headers}).map(res => res.json());
  }

  cancelOrder(orderId: number): Observable<boolean> {
    const headers = new Headers();
    headers.append('', 'application/json');
    return this.http.post('http://localhost:3000/cancel-order' + orderId, '', {headers}).map(res => res.json());
  }

  makeOrder(order: OrderModel): Observable<boolean> {
    const headers = new Headers();
    headers.append('', 'application/json');
    return this.http.post('http://localhost:3000/make-order', JSON.stringify(order), {headers}).map(res => res.json());
  }
}
