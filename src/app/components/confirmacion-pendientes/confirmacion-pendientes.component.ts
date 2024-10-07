import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmacion-pendientes',
  templateUrl: './confirmacion-pendientes.component.html'
})

export class ConfirmPending implements OnInit 
{

  confirmPends:ConfirmPend[]=[];

  constructor(private http: HttpClient)
  {
    this.http.get("http://192.168.84.108:8080/servicios/confirmacion_pendientes/")
        .subscribe((data: any) => {
        console.log(data);
        this.confirmPends=data;
        });
  }

  ngOnInit(): void {
  }
  
}

interface ConfirmPend{
  carga: string,
  pedido: string,
  numContenedores: string,
  fecha: string
}
