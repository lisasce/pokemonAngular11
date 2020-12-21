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
var core_1 = require("@angular/core");
var auth_service_1 = require("../authentification/auth.service");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, titleService) {
        this.authService = authService;
        this.router = router;
        this.titleService = titleService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("My Pokemon Library");
        this.myTitle = this.titleService.getTitle();
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.goHome = function () {
        this.router.navigate(['/pokemons/all']);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: './app/navBarComponent/navbar.html',
            styleUrls: ['./app/navBarComponent/navbar.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, platform_browser_1.Title])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.js.map