import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'หน้าหลัก',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'การจัดการ',
                items: [
                    { label: 'ข้อมูลพื้นฐานสถานบริการสุขภาพ', icon: 'pi pi-fw pi-id-card', routerLink: ['/reportdata'] },
                    { label: 'ดูสถานะคำขอ', icon: 'pi pi-fw pi-check-square', routerLink: ['/request'] },
                    { label: 'ประวัติคำขอเปลี่ยนแปลงข้อมูล', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] }
                ]
            },
            {
                label: 'รายงาน',
                items: [
                    { label: 'รายงานจำนวนเตียง', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'รายงานภาพรวม', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                    { label: 'รายงานจำนวนเตียงจริง', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                ]
            },
            {
                label: 'Utilities',
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                    { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
        ];
    }
}
