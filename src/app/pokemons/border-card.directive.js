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
exports.BorderCardDirective = void 0;
var core_1 = require("@angular/core");
var BorderCardDirective = /** @class */ (function () {
    function BorderCardDirective(el) {
        this.el = el;
        this.initialColor = '#f5f5f5';
        this.defaultColor = '#009688'; // das ist gleich wie const in js fuer klassen
        this.defaultHeight = 70;
        this.defaultWidth = 40;
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
        this.setWidth(this.defaultWidth);
    }
    BorderCardDirective.prototype.onMouseEnter = function () {
        this.setBorder(this.borderColor || this.defaultColor);
    };
    BorderCardDirective.prototype.onMouseLeave = function () {
        this.setBorder(this.initialColor);
    };
    BorderCardDirective.prototype.setBorder = function (color) {
        this.el.nativeElement.style.border = this.getBorderStyle(color);
    };
    BorderCardDirective.prototype.setHeight = function (height) {
        this.el.nativeElement.style.height = height + '%';
    };
    BorderCardDirective.prototype.getBorderStyle = function (color) {
        return 'solid 4px ' + color;
    };
    BorderCardDirective.prototype.setWidth = function (width) {
        this.el.nativeElement.style.height = width + '%';
    };
    var _a;
    __decorate([
        core_1.Input('pkmnBorderCard'),
        __metadata("design:type", String)
    ], BorderCardDirective.prototype, "borderColor", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BorderCardDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BorderCardDirective.prototype, "onMouseLeave", null);
    BorderCardDirective = __decorate([
        core_1.Directive({
            selector: '[pkmnBorderCard]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" ? _a : Object])
    ], BorderCardDirective);
    return BorderCardDirective;
}());
exports.BorderCardDirective = BorderCardDirective;
//# sourceMappingURL=border-card.directive.js.map