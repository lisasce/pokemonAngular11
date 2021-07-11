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
exports.PokemonsService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var helpers_1 = require("./helpers");
var PokemonsService = /** @class */ (function () {
    function PokemonsService(http) {
        this.http = http;
        this.pokemonsUrl = 'api/pokemons';
    }
    PokemonsService.prototype.log = function (log) {
        console.info(log);
    };
    PokemonsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            console.log(operation + " failed: " + error.message);
            return rxjs_1.of(result); //transforme les donnees passees en parametre en observable
        };
    };
    PokemonsService.prototype.getPokemonTypes = function () {
        return ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Eletric', 'Poison', 'Fairy', 'Flying', 'Fighting', 'Psy'];
    };
    // Retourne tous les pokémons
    PokemonsService.prototype.getPokemons = function () {
        var _this = this;
        return this.http.get(this.pokemonsUrl).pipe(operators_1.tap(function (_) { return _this.log("fetched pokemons"); }), operators_1.catchError(this.handleError("getPokemons", [])));
    };
    // Retourne le pokémon avec l'identifiant passé en paramètre
    PokemonsService.prototype.getPokemon = function (id) {
        var _this = this;
        var url = this.pokemonsUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched pokemon id=" + id); }), operators_1.catchError(this.handleError("getPokemon id=" + id)));
    };
    PokemonsService.prototype.updatePokemon = function (pokemon) {
        var _this = this;
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        // on declare une entete pour declarer le format de son corps, ici json
        return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("updated pokemon id=" + pokemon.id); }), operators_1.catchError(this.handleError('updatePokemon')));
    };
    PokemonsService.prototype.deletePokemon = function (pokemon) {
        var _this = this;
        var url = this.pokemonsUrl + "/" + pokemon.id;
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(url, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("deleted pokemon id=" + pokemon.id); }), operators_1.catchError(this.handleError('deletePokemon')));
    };
    PokemonsService.prototype.addPokemon = function (pokemon) {
        var _this = this;
        pokemon.id = helpers_1.idGenerator();
        pokemon.picture = helpers_1.urlGenerator();
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.pokemonsUrl, pokemon, httpOptions).pipe(operators_1.tap(function (pokemon) { return _this.log("added pokemon with id=" + pokemon.id); }), operators_1.catchError(this.handleError('addPokemon')));
    };
    PokemonsService.prototype.submitPokemon = function (pokemon) {
        if (!pokemon.id) {
            return this.addPokemon(pokemon);
        }
        else {
            return this.updatePokemon(pokemon);
        }
    };
    PokemonsService.prototype.searchPokemons = function (term) {
        var _this = this;
        if (!term.trim()) {
            return rxjs_1.of([]);
        } // si c'est vide
        return this.http.get(this.pokemonsUrl + "/?name=" + term).pipe(operators_1.tap(function (_) { return _this.log("found pokemons matching \"" + term + "\""); }), operators_1.catchError(this.handleError('searchPokemons', [])));
    };
    var _a;
    PokemonsService = __decorate([
        core_1.Injectable() // peut recevoir d'autres dependences
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" ? _a : Object])
    ], PokemonsService);
    return PokemonsService;
}());
exports.PokemonsService = PokemonsService;
// tap: Perform a side effect for every emission on the source Observable, but return an Observable that is identical to the source, Intercepts each emission on the source and runs a function, but returns an output which is identical to the source as long as errors don't occur. https://rxjs.dev/api/operators/tap
//# sourceMappingURL=pokemons.service.js.map