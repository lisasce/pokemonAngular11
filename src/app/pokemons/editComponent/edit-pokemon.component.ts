import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
    selector: 'edit-pokemon',
    template: `
    <h3 class="header center">Edit {{ pokemon?.name }}</h3>
        <p class="center">
            <img *ngIf="pokemon" [src]="pokemon.picture"/>
        </p>
    <pokemon-form [pokemon]="pokemon"></pokemon-form>
  `,
})
export class EditPokemonComponent implements OnInit {

    pokemon: Pokemon = null;

    constructor(
        private route: ActivatedRoute,
        private pokemonsService: PokemonsService) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id']; // convert str into number
        this.pokemonsService.getPokemon(id)
            .subscribe(pokemon => this.pokemon = pokemon);
    }


}
