import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module a importer pr tous les sous-modules a la place de browser module

import { PokemonRoutingModule } from "./pokemons-routing.module";

import { ListPokemonComponent } from './listComponent/list-pokemon.component';
import { DetailPokemonComponent } from './detailComponent/detail-pokemon.component';
import { PokemonFormComponent } from "./formComponent/pokemon-form.component";
import { EditPokemonComponent } from "./editComponent/edit-pokemon.component";
import { AddPokemonComponent } from "./addComponent/add-pokemon.component";
import { PokemonSearchComponent } from "./searchComponent/search-pokemon.component";
import { LoaderComponent } from "./loaderComponent/loader.component";


import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';


import { AuthGuard } from "../authentification/auth.guard";
import { PokemonsService } from "./pokemons.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    exports: [
        BorderCardDirective // if you need it somewhere else in your app
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonSearchComponent,
        PokemonFormComponent,
        EditPokemonComponent,
        AddPokemonComponent,
        LoaderComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [AuthGuard, PokemonsService]
})
export class PokemonsModule { }
