import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlanoEconomicoComponent } from './components/plano-economico/plano-economico.component';
import { TabelaEconomicoComponent } from './components/tabela-economico/tabela-economico.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanoEconomicoComponent,
    TabelaEconomicoComponent,
  ],
  imports: [
    BrowserModule,
    MenuComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
