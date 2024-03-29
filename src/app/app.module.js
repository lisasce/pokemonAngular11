"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var pokemons_module_1 = require("./pokemons/pokemons.module");
var http_1 = require("@angular/common/http");
var login_routing_module_1 = require("./authentification/login-routing.module");
var forms_1 = require("@angular/forms");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var navbar_1 = require("./navBarComponent/navbar");
var page_not_found_component_1 = require("./page-not-found.component");
var login_component_1 = require("./authentification/loginComponent/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false }),
                // retirer ce module de simulation lors de l'utilisation d'une veritable api, dataEncapsulation concerne le format retourne
                pokemons_module_1.PokemonsModule,
                login_routing_module_1.LoginRoutingModule,
                app_routing_module_1.AppRoutingModule // si on met celle la avant on aura que du 404
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_1.NavbarComponent,
                login_component_1.LoginComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            providers: [
                platform_browser_1.Title
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map