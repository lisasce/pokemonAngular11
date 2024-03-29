"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFoundComponent = void 0;
var core_1 = require("@angular/core");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'page-404',
            template: "\n    <div class='center'>\n      <img src=\"http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png\"/>\n      <h1>Hey, cette page n'existe pas !</h1>\n        <h1><strong>404</strong></h1>\n      <a routerLink=\"/pokemons/all\" class=\"waves-effect waves-teal btn-flat\">\n        Retourner \u00E0 l' accueil\n      </a>\n    </div>\n  "
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map