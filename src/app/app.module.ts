import { NgModule } from '@angular/core';
import { AppConfig } from '../environments/environment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BadgeModule } from 'primeng/badge';
import { ReportdataComponent } from './reportdata/reportdata.component';
import { RequestComponent } from './request/request.component';
import { CommonModule } from '@angular/common';
import { ReportdataDetailComponent } from './reportdata-detail/reportdata-detail.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, DashboardComponent, ReportdataComponent, RequestComponent, ReportdataDetailComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BadgeModule,
        CommonModule,
        TableModule,
        ButtonModule
    ],
    providers: [
        { provide: 'API_URL', useValue: AppConfig.apiUrl },
        { provide: 'APPNAME', useValue: AppConfig.appName },
        { provide: 'VERSION', useValue: AppConfig.version },
        { provide: 'SUBVERSION', useValue: AppConfig.subVersion },
        { provide: 'WURL', useValue: AppConfig.whiteUrl },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
