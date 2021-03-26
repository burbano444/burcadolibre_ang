import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ShowProductsComponent } from './modules/show-products/show-products.component';
import { NavBarComponent } from './modules/shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowProductsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
