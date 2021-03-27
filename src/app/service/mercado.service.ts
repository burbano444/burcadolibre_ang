import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercadoService {
  host='https://api.mercadolibre.com/sites/MCO/search?q=';
  data:any;
  product:string;

  constructor(public client:HttpClient) {
    console.log("servicios");
  }

  concat(productconcat:string, page:number){
    this.product=productconcat;
    let offset=(page-1)*50;
    let url = this.host+productconcat+`&offset=${offset}`;
    let resultado=this.client.get(url);
    return resultado;
  }

  uptdatedata(data){
    this.data=data;
  }

  pagination(page:number){
    console.log(this.product);
    let offset=(page-1)*50;
    let url=this.host+this.product+`&offset=${offset}`;
    let resultado=this.client.get(url);
    return resultado;
  }

  getData(){
    return this.data;
  }

  getproductbyid(id){
    let resultado=this.client.get("https://api.mercadolibre.com/items?ids="+id);
    return resultado;
  }

  getsellerbyid(id){
    let resultado=this.client.get("https://api.mercadolibre.com/users/"+id);
    return resultado;
  }

}
