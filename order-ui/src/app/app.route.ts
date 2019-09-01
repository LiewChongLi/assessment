
import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'order',
    pathMatch: 'full',
  },
  {
    path: '', children: [
      {path: 'order', loadChildren: './order/order.module#OrderModule'},
      {path: '**', redirectTo: 'order'}
    ]
  }
];
