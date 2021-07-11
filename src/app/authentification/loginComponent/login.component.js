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
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../auth.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.message = 'You are not logged in. (pokeball/pokeball)';
        this.connectingStatus = false;
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = this.authService.checkLogin() ?
            'You are connected.' : 'Name or Password incorrect.';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.connectingStatus = true;
        this.message = 'Connecting ...';
        this.authService.login(this.name, this.password).subscribe(function (isLoggedIn) {
            var _a, _b, _c;
            if (isLoggedIn) {
                // Récupère l'URL de redirection depuis le guard d'authentification
                // Si aucune redirection n'a été définie, redirige l'utilisateur vers la liste des pokemons.
                var redirect = ((_c = (_b = (_a = _this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extractedUrl) === null || _b === void 0 ? void 0 : _b.queryParams) === null || _c === void 0 ? void 0 : _c.redirectUrl) || '/pokemons/all';
                _this.router.navigate([redirect]);
            }
            else {
                _this.connectingStatus = false;
                _this.password = '';
            }
            _this.setMessage();
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    var _a;
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/authentification/loginComponent/login.component.html',
            styleUrls: ['./app/authentification/loginComponent/login.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" ? _a : Object])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
// ?. ... "conditional chaining operator" (TypeScript 3++) geht nur weiter wann es links passt
//# sourceMappingURL=login.component.js.map