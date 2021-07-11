"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(id, hp, cp, name, picture, types, created) {
        if (id === void 0) { id = null; }
        if (hp === void 0) { hp = 45; }
        if (cp === void 0) { cp = 25; }
        if (name === void 0) { name = "Random Name"; }
        if (picture === void 0) { picture = "https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_960_720.png"; }
        if (types === void 0) { types = ['Normal']; }
        if (created === void 0) { created = new Date(); }
        this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map