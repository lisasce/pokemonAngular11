"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var list_pokemon_component_1 = require("./listComponent/list-pokemon.component");
var detail_pokemon_component_1 = require("./detailComponent/detail-pokemon.component");
var edit_pokemon_component_1 = require("./editComponent/edit-pokemon.component");
var add_pokemon_component_1 = require("./addComponent/add-pokemon.component");
var auth_guard_1 = require("../authentification/auth.guard");
// les routes du module Pokémon
var pokemonsRoutes = [
    {
        path: 'pokemons',
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'all', component: list_pokemon_component_1.ListPokemonComponent },
            { path: 'new', component: add_pokemon_component_1.AddPokemonComponent },
            { path: 'edit/:id', component: edit_pokemon_component_1.EditPokemonComponent },
            { path: ':id', component: detail_pokemon_component_1.DetailPokemonComponent }
        ]
    }
];
var PokemonRoutingModule = /** @class */ (function () {
    function PokemonRoutingModule() {
    }
    PokemonRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(pokemonsRoutes)
                //ne pas utiliser forRoute dans un sous module
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], PokemonRoutingModule);
    return PokemonRoutingModule;
}());
exports.PokemonRoutingModule = PokemonRoutingModule;
//# sourceMappingURL=pokemons-routing.module.js.map