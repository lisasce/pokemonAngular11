import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import {idGenerator, urlGenerator} from "./helpers";


@Injectable() // peut recevoir d'autres dependences
export class PokemonsService {

    constructor(private http: HttpClient) {
    }
    private pokemonsUrl = 'api/pokemons';

    private log(log: string){
        console.info(log);
    }

    private handleError<T>(operation= 'operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T); //transforme les donnees passees en parametre en observable
        };
    }

    getPokemonTypes(): string[]{
        return ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Eletric', 'Poison', 'Fairy', 'Flying', 'Fighting', 'Psy'];
    }

    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[ ]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
            tap(_ => this.log(`fetched pokemons`) ),
            catchError(this.handleError(`getPokemons`, []))
        );
    }


    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon>{
        const url = `${this.pokemonsUrl}/${id}`;

        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log(`fetched pokemon id=${id}`)),
            catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
        );
    }

    private updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        // on declare une entete pour declarer le format de son corps, ici json

        return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('updatePokemon'))
        );
    }

    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {

        const url = `${this.pokemonsUrl}/${pokemon.id}`;
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.delete<Pokemon>(url,httpOptions).pipe(
            tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('deletePokemon'))
        );
    }

    private addPokemon(pokemon: Pokemon): Observable<Pokemon> {

        pokemon.id = idGenerator();
        pokemon.picture = urlGenerator();

        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap((pokemon: Pokemon) => this.log(`added pokemon with id=${pokemon.id}`)),
            catchError(this.handleError<Pokemon>('addPokemon'))
        );
    }

    submitPokemon(pokemon: Pokemon): Observable<Pokemon> {

        if (!pokemon.id){
           return this.addPokemon(pokemon);
        }
        else {
           return this.updatePokemon(pokemon);
        }

    }

    searchPokemons(term: string): Observable<Pokemon[]> {
        if(!term.trim()){
            return of([]);
        }// si c'est vide

        return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
            tap(_ => this.log(`found pokemons matching "${term}"`)),
            catchError(this.handleError<Pokemon[]>('searchPokemons', []))
        );
    }



}
// tap: Perform a side effect for every emission on the source Observable, but return an Observable that is identical to the source, Intercepts each emission on the source and runs a function, but returns an output which is identical to the source as long as errors don't occur. https://rxjs.dev/api/operators/tap
