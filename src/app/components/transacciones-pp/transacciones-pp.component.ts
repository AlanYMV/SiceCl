import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transacciones-pp',
  templateUrl: './transacciones-pp.component.html'
})
export class TransaccionesPpComponent implements OnInit
{

  transacciones:Transaccion[]=[];

  constructor(private http: HttpClient){
      this.http.get("http://192.168.84.108:8080/servicios/transacciones_pick_putCL")
         .subscribe((data: any) => {
          console.log(data);
          this.transacciones=data;
         });
  }

  ngOnInit(): void {
  }

}

interface Transaccion
{
  item: string,
  transaccion: string,
  nombreUsuario: string,
  refrencia: string,
  fecha: string,
  tipoTrabajo: string,
  usuario: string,
  ubicacion: string,
  cantidad: string,
  antesEnTransito: string,
  despuesEnTransito: string,
  antesAMano: string,
  despuesAMano: string,
  antesComprometido: string,
  despuesComprometido: string,
  antesSuspenso: string,
  despuesSuspenso: string
}

