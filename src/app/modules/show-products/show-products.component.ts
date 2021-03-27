import { Component, OnInit } from '@angular/core';
import { MercadoService } from 'src/app/service/mercado.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products:any;
  constructor(public servicecli:MercadoService) {   }

  ngOnInit(): void {
    this.products=this.servicecli.data.results
    console.log(this.products)
  }

}
