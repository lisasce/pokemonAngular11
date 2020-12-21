import { Injectable } from '@angular/core';
// RxJS 6
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable()
export class AuthService {
     private _isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?

    // Une méthode de connexion
    login(name: string, password: string): Observable<boolean> {
        // Faites votre appel à un service d'authentification...
        const loggedIn: boolean = (name === 'pokeball' && password === 'pokeball');

        return of(loggedIn).pipe(
            delay(1000),
            tap(val => this._isLoggedIn = val)
        );
    }

    checkLogin(): boolean {
        return this._isLoggedIn;
    }


    // Une méthode de déconnexion
    logout(): void {
        this._isLoggedIn = false;
    }
}
