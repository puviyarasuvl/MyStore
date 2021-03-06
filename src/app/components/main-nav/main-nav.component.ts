import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
    email: string | undefined = '';
    constructor(public auth: AuthService) {}

    ngOnInit(): void {
        this.auth.user$.subscribe((profile) => {
            this.email = profile?.email;
        });
    }
}
