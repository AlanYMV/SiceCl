import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-auditorias',
  templateUrl: './consulta-auditorias.component.html'
})
export class ConsultaAuditoriasComponent implements OnInit {

  tiendas:Tienda[]=[];
  auditorias:Auditoria[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://192.168.84.108:8080/servicios/listado_tiendas_cl/")
    .subscribe((data: any) => {
     this.tiendas=data;
    });
  }

  buscarAuditorias(tienda:string, fechaInicio:string, fechaFin:string){
    this.http.get("http://192.168.84.108:8080/servicios/auditorias_tienda_cl/"+tienda+"/"+fechaInicio+"/"+fechaFin)
    .subscribe((data: any) => {
     this.auditorias=data;
    });
  }

}

interface Tienda{
  claveAlmacen: string,
  nombreAlmacen: string,
}

interface Auditoria{
  pedido: string,
  carga: string,
  fechaRecepcion: string,
  totalContenedores: string,
  contenedoresAuditados: string,
  porcentaje: string,
}
