"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//module a importer pr tous les sous-modules a la place de browser module
var pokemons_routing_module_1 = require("./pokemons-routing.module");
var list_pokemon_component_1 = require("./listComponent/list-pokemon.component");
var detail_pokemon_component_1 = require("./detailComponent/detail-pokemon.component");
var pokemon_form_component_1 = require("./formComponent/pokemon-form.component");
var edit_pokemon_component_1 = require("./editComponent/edit-pokemon.component");
var add_pokemon_component_1 = require("./addComponent/add-pokemon.component");
var search_pokemon_component_1 = require("./searchComponent/search-pokemon.component");
var loader_component_1 = require("./loaderComponent/loader.component");
var border_card_directive_1 = require("./border-card.directive");
var pokemon_type_color_pipe_1 = require("./pokemon-type-color.pipe");
var auth_guard_1 = require("../authentification/auth.guard");
var pokemons_service_1 = require("./pokemons.service");
var forms_1 = require("@angular/forms");
var PokemonsModule = /** @class */ (function () {
    function PokemonsModule() {
    }
    PokemonsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                pokemons_routing_module_1.PokemonRoutingModule
            ],
            exports: [
                border_card_directive_1.BorderCardDirective // if you need it somewhere else in your app
            ],
            declarations: [
                list_pokemon_component_1.ListPokemonComponent,
                detail_pokemon_component_1.DetailPokemonComponent,
                search_pokemon_component_1.PokemonSearchComponent,
                pokemon_form_component_1.PokemonFormComponent,
                edit_pokemon_component_1.EditPokemonComponent,
                add_pokemon_component_1.AddPokemonComponent,
                loader_component_1.LoaderComponent,
                border_card_directive_1.BorderCardDirective,
                pokemon_type_color_pipe_1.PokemonTypeColorPipe
            ],
            providers: [auth_guard_1.AuthGuard, pokemons_service_1.PokemonsService]
        })
    ], PokemonsModule);
    return PokemonsModule;
}());
exports.PokemonsModule = PokemonsModule;
//# sourceMappingURL=pokemons.module.js.map