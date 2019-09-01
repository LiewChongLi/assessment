import { NgModule } from '@angular/core';
import * as resolve from './order.resolve';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { routes } from './order.route';
import {OrderComponent} from './order.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    FormsModule,
    ReactiveFormsModule,
    TabsModule
  ],
  providers: [
    resolve.ResolveOrderList
  ],
  declarations: [
    OrderComponent
  ]
})

export class OrderModule {
  public static routes = routes;
}
