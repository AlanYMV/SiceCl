import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-mesure-location',
  templateUrl: './unit-mesure-location.component.html'
})
export class UnitMesureLocationComponent implements OnInit {

  descripcion="";
  piezasInner="";
  piezasCaja="";
  item!: Item;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  buscarItem(ubicacion:string, item:string){
    this.http.get("http://192.168.84.108:8080/servicios/unit_mesure_location_cl/"+ubicacion+"/"+item)
    .subscribe((data: any) => {
     this.item=data;
     if (this.item.descripcion==null)
     {
      this.descripcion="No se encontro registro"
     }
     else
     {
      this.descripcion=this.item.descripcion;
     }
     this.piezasInner=this.item.piezasInner;
     this.piezasCaja=this.item.piezasCaja;
    });
  }

}

interface Item{
  descripcion: string,
  piezasInner: string,
  piezasCaja: string,
}
