"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function urlGenerator() {
    // @ts-ignore
    var num = (Math.floor(Math.random() * 893) + 13).toString().padStart(3, '0');
    var newUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + num + ".png";
    return newUrl;
}
exports.urlGenerator = urlGenerator;
function idGenerator() {
    var newId = Math.floor(Math.random() * 893) + 13;
    return newId;
}
exports.idGenerator = idGenerator;
//# sourceMappingURL=helpers.js.map