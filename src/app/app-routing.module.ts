import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MenuComponent } from "./components/menu/menu.component";
import { PlanoEconomicoComponent } from "./components/home/plano-economico/plano-economico.component";
import { TabelaEconomicoComponent } from "./components/home/plano-economico/tabela-economico/tabela-economico.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tabela', component: TabelaEconomicoComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}