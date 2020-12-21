import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule} from "./pokemons/pokemons.module";
import { HttpClientModule} from "@angular/common/http";
import { LoginRoutingModule } from "./authentification/login-routing.module";
import { FormsModule } from "@angular/forms";

import { HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService} from "./in-memory-data.service";

import { AppComponent }  from './app.component';
import { NavbarComponent } from "./navBarComponent/navbar";
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from "./authentification/loginComponent/login.component";

@NgModule({
    imports: [
        BrowserModule, // doit etre en premier
        HttpClientModule,
        FormsModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
// retirer ce module de simulation lors de l'utilisation d'une veritable api, dataEncapsulation concerne le format retourne
        PokemonsModule, // les routes de notre app sont ici
        LoginRoutingModule,
        AppRoutingModule // si on met celle la avant on aura que du 404
    ],
    declarations: [
        AppComponent ,
        NavbarComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    providers: [
        Title
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
