import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CotizadorComponent } from './pages/home/cotizador/cotizador.component';
import { TipoDeProyectoComponent } from './pages/home/tipo-de-proyecto/tipo-de-proyecto.component';
import { ChooseTypeProjectComponent } from './pages/home/choose-type-project/choose-type-project.component';
import { FirebaseModule } from './modules/firebase.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CotizadorComponent,
    TipoDeProyectoComponent,
    ChooseTypeProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
