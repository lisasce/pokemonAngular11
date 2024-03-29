"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPokemonComponent = void 0;
var core_1 = require("@angular/core");
var pokemon_1 = require("../pokemon");
var AddPokemonComponent = /** @class */ (function () {
    function AddPokemonComponent() {
        this.pokemon = null;
    }
    AddPokemonComponent.prototype.ngOnInit = function () {
        this.pokemon = new pokemon_1.Pokemon();
    };
    AddPokemonComponent = __decorate([
        core_1.Component({
            selector: 'add-pokemon',
            templateUrl: './app/pokemons/addComponent/add-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], AddPokemonComponent);
    return AddPokemonComponent;
}());
exports.AddPokemonComponent = AddPokemonComponent;
//# sourceMappingURL=add-pokemon.component.js.map