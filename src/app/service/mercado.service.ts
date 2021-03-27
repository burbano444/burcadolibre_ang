import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercadoService {
  host='https://api.mercadolibre.com/sites/MCO/search?q=';
  data:any;

  constructor(public client:HttpClient) {
    console.log("servicios");
  }

  concat(productconcat:string){
    let url = this.host+productconcat;
    let resultado=this.client.get(url);
    return resultado;
  }

  uptdatedata(data){
    this.data=data;
  }
}
