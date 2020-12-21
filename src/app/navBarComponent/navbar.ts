import { Component, OnInit } from '@angular/core';
import {AuthService} from "../authentification/auth.service";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'navbar',
    templateUrl: './app/navBarComponent/navbar.html',
    styleUrls: ['./app/navBarComponent/navbar.css']

})
export class NavbarComponent implements OnInit {
    private myTitle: string;

    constructor(private authService: AuthService, private router: Router, private titleService: Title) {

    }

    ngOnInit(): void {
        this.titleService.setTitle("My Pokemon Library");
        this.myTitle = this.titleService.getTitle();
    }

    logout(): void  {
        this.authService.logout();
        this.router.navigate(['/login']);
}

    goHome(): void {
        this.router.navigate(['/pokemons/all']);
    }
}
