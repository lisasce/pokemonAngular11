import { Component, OnInit } from '@angular/core';
import { Pokemon} from "../pokemon";

@Component({
    selector: 'add-pokemon',
    templateUrl: './app/pokemons/addComponent/add-pokemon.component.html'
})
export class AddPokemonComponent implements OnInit {

   private pokemon: Pokemon = null;

    constructor() { }

    ngOnInit(): void {
        this.pokemon = new Pokemon();
    }




}
