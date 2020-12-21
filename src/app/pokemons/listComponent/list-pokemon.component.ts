import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

import { Router } from '@angular/router';
import { PokemonsService} from "../pokemons.service";

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/listComponent/list-pokemon.component.html',
    styleUrls: ['./app/pokemons/listComponent/list-pokemon.component.css']

})
export class ListPokemonComponent implements OnInit {

    private pokemons: Pokemon[] = null;

    constructor(private router: Router, private pokemonsService: PokemonsService) { }


    ngOnInit(): void {
        this.getPokemons();

    }

   getPokemons(): void{
        //this.pokemonsService.getPokemons().subscribe(valFromStream => this.pokemons = valFromStream);

        this.pokemonsService.getPokemons().subscribe({
            next: (pokemons) => {
                this.pokemons = pokemons;
            },
            error: (error) => {
                console.error(error.message);
            }
        })
    }

    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        const link = ['/pokemons', pokemon.id];
        this.router.navigate(link);
    }

    goToAdd(): void {
        console.log('Ajouter un Pokemon');
        const link = ['/pokemons/new'];
        this.router.navigate(link);
    }


}




