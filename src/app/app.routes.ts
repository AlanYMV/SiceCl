import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
/*import { HeroesComponent } from "./components/heroes/heroes.component";
import { ArticulosComponent } from "./components/articulos/articulos.component";
import { PedidosComponent } from "./components/pedidos/pedidos.component";
import { CargasComponent } from "./components/cargas/cargas.component";
import { StorageComponent } from "./components/storage/storage.component";
import { PreciosComponent } from "./components/precios/precios.component";*/
import { InventarioComponent } from "./components/inventario/inventario.component";
/*import { RecibosComponent } from "./components/recibos/recibos.component";
import { SplitComponent } from "./components/split/split.component";*/
import { ReporteTiendasComponent } from "./components/reporte-tiendas/reporte-tiendas.component";
import { CuadrajeComponent } from "./components/cuadraje/cuadraje.component";
//import { ConetendorEpqComponent } from "./components/conetendor-epq/conetendor-epq.component";
import { StorageComponent } from "./components/storage/storage.component";
import { TransaccionesPpComponent } from "./components/transacciones-pp/transacciones-pp.component";
import { LineasOlaComponent } from "./components/lineas-ola/lineas-ola.component";
import { OlaPzaContComponent } from "./components/ola-pza-cont/ola-pza-cont.component";
import { WaveAnalysisComponent } from "./components/wave-analysis/wave-analysis.component";
import { UnitMesureLocationComponent } from "./components/unit-mesure-location/unit-mesure-location.component";
import { SplitComponent } from "./components/split/split.component";
import { PreciosComponent } from "./components/precios/precios.component";
import { DownloadsComponent } from "./components/downloads/downloads.component";
import { DownloadsAlmacenComponent } from "./components/downloads-almacen/downloads-almacen.component";
import { RecibosComponent } from "./components/recibos/recibos.component";
import { UbicacionesVaciasComponent } from "./components/ubicaciones-vacias/ubicaciones-vacias.component";
import { EstatusOlaComponent } from "./components/estatus-ola/estatus-ola.component";
import { ReciboTiendaComponent } from "./components/recibo-tienda/recibo-tienda.component";
import { ConsultaAuditoriasComponent } from "./components/consulta-auditorias/consulta-auditorias.component";

const APP_ROUTES : Routes = [
    { path:'home', component: HomeComponent},
    { path:'about', component: AboutComponent},
    { path:'inventario', component: InventarioComponent},
    { path:'reporte-tiendas', component: ReporteTiendasComponent},
    { path:'cuadraje', component: CuadrajeComponent},
    { path:'storage', component: StorageComponent},
    { path:'transacciones-pp', component: TransaccionesPpComponent},
    { path:'lineas-ola', component: LineasOlaComponent},
    { path:'ola-pza-cont', component: OlaPzaContComponent},
    { path:'wave-analysis', component: WaveAnalysisComponent},
    { path:'unit-mesure', component: UnitMesureLocationComponent},
    { path:'split', component: SplitComponent},
    { path:'precios', component: PreciosComponent},
    { path:'downloads', component: DownloadsComponent},
    { path:'downloadsAlmacen', component: DownloadsAlmacenComponent},
    { path:'recibos', component: RecibosComponent},
    { path:'ubicacionVacia', component: UbicacionesVaciasComponent},
    { path:'estatusOla', component: EstatusOlaComponent},
    { path:'recibo-tienda', component: ReciboTiendaComponent},
    { path:'consulta-auditoria', component: ConsultaAuditoriasComponent},
    { path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
