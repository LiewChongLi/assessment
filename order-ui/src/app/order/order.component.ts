import {Component, OnInit} from '@angular/core';
import {OrderService} from '../service/order.service';
import {OrderModel} from '../model/order.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-ui',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  private static readonly CREATED_STATUS = 'created';

  form: {
    data: {
      order: OrderModel[],
      selectedOrder: OrderModel,
      placeOrder: OrderModel
    }
  };

  constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router) {
  }

  viewOrder(orderId: number) {
    this.form.data.selectedOrder = null;

    this.orderService.getSpecificOrder(orderId).subscribe(res => {
      this.form.data.selectedOrder = res;
    });
  }

  cancelOrder(orderId: number) {
    this.orderService.cancelOrder(orderId).subscribe(res => {
      if (res) {
        console.log('success');
      } else {
        console.log('failure');
      }
    });
  }

  onSubmit() {
    const latestId = this.form.data.order.length + 1;
    this.form.data.placeOrder.id = latestId + 1;
    this.form.data.placeOrder.status = OrderComponent.CREATED_STATUS;
    this.form.data.placeOrder.createdDate = new Date();

    this.orderService.makeOrder(this.form.data.placeOrder).subscribe(res => {
      if (res) {
        console.log('success');
      } else {
        console.log('failure');
      }
    });
  }

  public ngOnInit() {
    this.form.data.selectedOrder = null;
    this.form.data.order = this.route.snapshot.data.orderList;
  }
}
