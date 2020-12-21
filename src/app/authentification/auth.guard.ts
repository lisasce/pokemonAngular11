import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const url : UrlTree = this.router.parseUrl('/login');
        url.queryParams = {
            redirectUrl: state.url
        };
        return this.authService.checkLogin() || url;
    }
}
// || caste links auf boolean, wenn false dann weiter mit rechts
// ?? "nullish coercion" nur wenn links === null|undefined|isNil dann rechts
