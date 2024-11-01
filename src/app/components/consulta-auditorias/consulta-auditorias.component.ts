import { HttpClient } from '@angular/common/http';
import { Component, OnInit,HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-consulta-auditorias',
  templateUrl: './consulta-auditorias.component.html'
})
export class ConsultaAuditoriasComponent implements OnInit {

  tiendas:Tienda[]=[];
  auditorias:Auditoria[]=[];
  pedidos: { [key: string]: string[] } = {};
  datos: any;
  formulario: FormGroup;

  @HostListener('window:unload', ['$event'])
  unload(event: any) {
    localStorage.removeItem('datosPaginaActual');
  }

  constructor(private http: HttpClient) { 
    this.formulario = new FormGroup({
      tienda: new FormControl(''),
      fechaInicio: new FormControl(''),
      fechaFin: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.http.get("http://192.168.84.108:8080/servicios/listado_tiendas_cl/")
    .subscribe((data: any) => {
        this.tiendas = data;
        console.log('Tiendas:', this.tiendas);

        const datosGuardados = localStorage.getItem('datosPaginaActual');
        if (datosGuardados !== null) {
            const datos = JSON.parse(datosGuardados);
            console.log('Datos guardados:', datos);
            this.formulario = new FormGroup({
                tienda: new FormControl(datos.tienda || this.tiendas[0]?.claveAlmacen || ''),
                fechaInicio: new FormControl(datos.fechaInicio || ''),
                fechaFin: new FormControl(datos.fechaFin || '')
            });
            console.log('Form con datos guardados ', this.formulario.value);
        } else {
            this.formulario = new FormGroup({
                tienda: new FormControl(this.tiendas[0]?.claveAlmacen || ''),
                fechaInicio: new FormControl(''),
                fechaFin: new FormControl('')
            });
            console.log('Form sin datos guardados', this.formulario.value);
        }
    });
}




  buscarAuditorias(tienda:string, fechaInicio:string, fechaFin:string){
    this.http.get("http://192.168.84.108:8080/servicios/auditorias_tienda_cl/"+tienda+"/"+fechaInicio+"/"+fechaFin)
    .subscribe((data: any) => {
     this.auditorias=data;
    });
  }

  buscarOrdenes(tienda: string, fecha: string) {
    this.http.get<Pedidos[]>(`http://192.168.84.108:8080/servicios/auditoria_orders_cl/${tienda}/${fecha}/`)
    .subscribe((data: Pedidos[]) => { 
      console.log('Datos recibidos:', data); 
      this.pedidos[fecha] = data.map(pedido => pedido.order);
      console.log('Pedidos:', this.pedidos[tienda]); 
      });
  }
  
  mostrarSubFamilia(tienda: string, fecha: string): void {
      const url = `http://192.168.84.108:8080/servicios/sub_family_order_cl/${tienda}/${fecha}/`;
      this.http.get<any[]>(url).subscribe(data => {
        console.log(data); 
        
      }, error => {
        console.error('Error fetching data:', error);
      });
    } 
  guardarDatos(tienda: string, inicio:string, fin:string) {
    const datos = {
      tienda: tienda,
      fechaInicio: inicio,
      fechaFin: fin
    };
  
    localStorage.setItem('datosPaginaActual', JSON.stringify(datos));
    console.log('Datos gurdados: ' ,datos);
  }
  
}

interface Tienda{
  claveAlmacen: string,
  nombreAlmacen: string,
}

interface Auditoria{
  tienda: string,
  // pedido: string,
  // carga: string,
  fechaRecepcion: string,
  totalContenedores: string,
  contenedoresAuditados: string,
  porcentaje: string,
}

interface Pedidos{
  order:string
}
