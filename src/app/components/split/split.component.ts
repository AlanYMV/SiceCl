import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
})
export class SplitComponent implements OnInit {

  splits:Split[]=[];


  constructor(private http: HttpClient){
      this.http.get("http://192.168.84.108:8080/servicios/splits_cl")
         .subscribe((data: any) => {
          this.splits=data;
         });
  }

  ngOnInit(): void {
  }
}

interface Split{
  pedido: string,
  fechaCreacion: string,
  numeroContenedores: string,
}
