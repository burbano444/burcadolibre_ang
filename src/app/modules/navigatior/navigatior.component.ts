import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercadoService } from 'src/app/service/mercado.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigatior',
  templateUrl: './navigatior.component.html',
  styleUrls: ['./navigatior.component.css']
})
export class NavigatiorComponent implements OnInit {
  page:number;
  @Output() evento:EventEmitter<number>;
  constructor(public servicecli:MercadoService, public active:ActivatedRoute,  public rute:Router) {
    this.evento=new EventEmitter();
   }

  ngOnInit(): void {
    this.active.params.subscribe((param:any)=>{
      this.page=param.page;
    })
  }

  changepage(page:number){
    this.servicecli.pagination(page).subscribe((data)=>{
      this.servicecli.uptdatedata(data);
      this.evento.emit();
      //this.rute.navigate([`products/${page}`]);
    });
  }
}
