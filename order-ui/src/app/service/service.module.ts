import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderService} from './order.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:
    [
      OrderService
    ],
})
export class ServiceModule {
}
