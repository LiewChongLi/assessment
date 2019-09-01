import {Routes} from '@angular/router';
import {OrderComponent} from './order.component';
import * as resolve from './order.resolve';

export const routes: Routes = [
  {
    path: '', children: [
      {
        path: '',
        component: OrderComponent,
        resolve: {
          orderList: resolve.ResolveOrderList
        }
      }
    ]
  }
];
