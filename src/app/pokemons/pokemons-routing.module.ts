import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent }    from './listComponent/list-pokemon.component';
import { DetailPokemonComponent }  from './detailComponent/detail-pokemon.component';
import { EditPokemonComponent } from "./editComponent/edit-pokemon.component";
import {AddPokemonComponent} from "./addComponent/add-pokemon.component";

import { AuthGuard } from "../authentification/auth.guard";

// les routes du module Pokémon
const pokemonsRoutes: Routes = [
    {
        path: 'pokemons',
        canActivate: [AuthGuard],
        children: [
            { path: 'all', component: ListPokemonComponent },
            { path: 'new', component: AddPokemonComponent },

            { path: 'edit/:id', component: EditPokemonComponent},
            { path: ':id', component: DetailPokemonComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
        //ne pas utiliser forRoute dans un sous module
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }
