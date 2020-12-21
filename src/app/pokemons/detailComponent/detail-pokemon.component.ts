import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonsService} from "../pokemons.service";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemons/detailComponent/detail-pokemon.component.html'

})
export class DetailPokemonComponent implements OnInit {
    private pokemon: Pokemon = null;

    constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {}

    ngOnInit(): void {

        const id = +this.route.snapshot.paramMap.get('id');
        this.pokemonsService.getPokemon(id)
            .subscribe(pokemon => this.pokemon = pokemon);

    }

    goBack(): void {
        this.pokemon = null;
        this.router.navigate(['/pokemons/all']);
    }
    goEdit(pokemon: Pokemon): void {
        const link = ['/pokemons/edit', pokemon.id]
        this.router.navigate(link);
    }

    goDelete(pokemon: Pokemon): void{

        this.pokemonsService.deletePokemon(pokemon)
            .subscribe(_ => this.goBack());
    }

}
