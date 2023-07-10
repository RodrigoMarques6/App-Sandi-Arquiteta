import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlanoEconomicoComponent } from './components/home/plano-economico/plano-economico.component';
import { TabelaEconomicoComponent } from './components/tabela-economico/tabela-economico.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanoAntecipadoComponent } from './components/home/plano-antecipado/plano-antecipado.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MenuComponent,
    TabelaEconomicoComponent,
    AppRoutingModule,
    HomeComponent,
    BrowserAnimationsModule,
    PlanoEconomicoComponent,
    PlanoAntecipadoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
