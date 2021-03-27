import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MercadoService } from 'src/app/service/mercado.service';



@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products:any;
  page:number;
  constructor(public servicecli:MercadoService, public active:ActivatedRoute, public rt:Router) {
    this.products=this.servicecli.getData().results;
    console.log(this.products);
  }

  ngOnInit(): void {
    this.active.params.subscribe((page:any)=>{
      this.page=page;
    })
  }

  ngOnChange():void {
    console.log('onChange');
  }

  actualizar(){
    this.products=this.servicecli.getData().results;
    console.log(this.products);
  }

  showmore(id:string){

    this.rt.navigate([`/producto/${id}`]);
  }
}
