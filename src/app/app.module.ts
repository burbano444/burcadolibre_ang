import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ShowProductsComponent } from './modules/show-products/show-products.component';
import { NavBarComponent } from './modules/shared/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InitialComponent } from './modules/initial/initial.component';
import { NavigatiorComponent } from './modules/navigatior/navigatior.component';
import { OnlyproductComponent } from './modules/onlyproduct/onlyproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowProductsComponent,
    NavBarComponent,
    InitialComponent,
    NavigatiorComponent,
    OnlyproductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
