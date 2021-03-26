import { Routes } from '@angular/router';
import { ShowProductsComponent } from './modules/show-products/show-products.component';
import { NavBarComponent } from './modules/shared/nav-bar/nav-bar.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ShowProductsComponent

  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'products'
  }
]
