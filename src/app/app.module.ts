import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlanoEconomicoComponent } from './components/plano-economico/plano-economico.component';
import { TabelaEconomicoComponent } from './components/tabela-economico/tabela-economico.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PlanoEconomicoComponent,
  ],
  imports: [
    BrowserModule,
    MenuComponent,
    TabelaEconomicoComponent,
    AppRoutingModule,
    HomeComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
