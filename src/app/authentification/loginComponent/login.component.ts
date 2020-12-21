import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'login',
    templateUrl: './app/authentification/loginComponent/login.component.html',
    styleUrls: ['./app/authentification/loginComponent/login.component.css']
})
export class LoginComponent {
    private message: string = 'You are not logged in. (pokeball/pokeball)';
    private name: string;
    private password: string;
    private connectingStatus: boolean = false;

    constructor(private authService: AuthService, private router: Router) { }

    setMessage() {
        this.message = this.authService.checkLogin() ?
            'You are connected.' : 'Name or Password incorrect.';
    }

    login() {
        this.connectingStatus = true;
        this.message = 'Connecting ...';
        this.authService.login(this.name, this.password).subscribe((isLoggedIn) => {
            if (isLoggedIn) {
                // Récupère l'URL de redirection depuis le guard d'authentification
                // Si aucune redirection n'a été définie, redirige l'utilisateur vers la liste des pokemons.
                const redirect = this.router.getCurrentNavigation()?.extractedUrl?.queryParams?.redirectUrl || '/pokemons/all';

                this.router.navigate([redirect]);
            } else {
                this.connectingStatus = false;
                this.password = '';
            }
            this.setMessage();
        });
    }


     logout() {
        this.authService.logout();
        this.setMessage();
    }
}

// ?. ... "conditional chaining operator" (TypeScript 3++) geht nur weiter wann es links passt
