import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MercadoService } from 'src/app/service/mercado.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public servicecli:MercadoService, public rute:Router) {

  }

  ngOnInit(): void {
  }

  search(product:string) {

    this.servicecli.concat(product).subscribe((result)=>{
      this.servicecli.uptdatedata(result);
      this.rute.navigate(['products']);
    });


  }

}
