import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute } from '@angular/router'; 

@Component({ 
  selector: 'app-sub-family-orders', 
  templateUrl: './sub-family-orders.component.html' 
}) 
export class GetSubFamilyOrder implements OnInit { 

  orders: Orders[] = []; 
  tienda: string = ''; 
  fecha: string = ''; 

  constructor(private route: ActivatedRoute, private http: HttpClient) { } 

  ngOnInit(): void { 
    this.route.queryParams.subscribe(params => { 
      this.tienda = params['tienda']; 
      this.fecha = params['fecha']; 
      this.getOrders(this.tienda, this.fecha); 
    }); 
  } 

  goBack() {
    window.history.back()
  }
  
  getOrders(tienda: string, fecha: string): void { 
    this.orders = []; 
    this.http.get("http://192.168.84.108:8080/servicios/sub_family_order_cl/"+tienda+"/"+fecha+"/") 
    .subscribe(
      (data: any) => { 
        this.orders = data; 
        console.log('Datos recibidos:', this.orders);  
      }); 
  } 
} 

interface Orders { 
  tienda: string;
  sub: string; 
  totalContenedor : string;
  auditado: string;
  porcentaje: string;
}