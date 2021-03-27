import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercadoService } from 'src/app/service/mercado.service';


@Component({
  selector: 'app-onlyproduct',
  templateUrl: './onlyproduct.component.html',
  styleUrls: ['./onlyproduct.component.css']
})
export class OnlyproductComponent implements OnInit {
  id:string;
  product:any;
  seller:any;

  constructor(public servicecli:MercadoService, public rutera: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutera.params.subscribe((params)=>{
      this.id=params.id;
      this.servicecli.getproductbyid(this.id).subscribe((data:any)=>{
        this.product=data[0].body;
        this.servicecli.getsellerbyid(this.product.seller_id).subscribe((seller)=>{
          this.seller=seller;
          console.log(this.seller);
        });
      })
    })
  }



}
