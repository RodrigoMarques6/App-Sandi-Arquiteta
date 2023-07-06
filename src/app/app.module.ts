import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlanoEconomicoComponent } from './components/plano-economico/plano-economico.component';
import { TabelaEconomicoComponent } from './components/tabela-economico/tabela-economico.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanoEconomicoComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    MenuComponent,
    TabelaEconomicoComponent,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
