"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDataService = void 0;
var mock_pokemons_1 = require("./pokemons/mock-pokemons");
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var pokemons = mock_pokemons_1.POKEMONS;
        return { pokemons: pokemons };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
// simule une petite db et une API
//# sourceMappingURL=in-memory-data.service.js.map