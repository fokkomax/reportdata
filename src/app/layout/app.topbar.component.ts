import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { LoginService } from '../service/login.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    userDetail: any;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,
        private loginService: LoginService,
        private route: Router) {
        this.loginService.decodeToken().then(result => this.userDetail = result);
    }

    async ngOnInit(): Promise<void> {
        // this.getLocalStorage();
    }

    onLogout() {
        this.loginService.logout();
        this.route.navigate(['login']);
    }

}
