import { Routes } from '@angular/router';
import { InitialComponent } from './modules/initial/initial.component';
import { ShowProductsComponent } from './modules/show-products/show-products.component';


export const routes: Routes = [
  {
    path: 'products',
    component: ShowProductsComponent
  },
  {
    path: 'initial',
    component: InitialComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'initial'
  }
]
