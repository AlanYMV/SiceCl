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
    this.http.get("http://127.0.0.1:8000/servicios/confirmacion_pendientes/")
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
