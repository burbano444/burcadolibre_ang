import { Routes } from '@angular/router';
import { InitialComponent } from './modules/initial/initial.component';
import { OnlyproductComponent } from './modules/onlyproduct/onlyproduct.component';
import { ShowProductsComponent } from './modules/show-products/show-products.component';


export const routes: Routes = [
  {
    path: 'products/:page',
    component: ShowProductsComponent
  },
  {
    path: 'initial',
    component: InitialComponent
  },
  {
    path: 'producto/:id',
    component: OnlyproductComponent
  },
 /* {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'initial'
  }*/
]
