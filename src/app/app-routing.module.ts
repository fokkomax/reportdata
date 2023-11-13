import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportdataComponent } from './reportdata/reportdata.component';
import { RequestComponent } from './request/request.component';
import { ReportdataDetailComponent } from './reportdata-detail/reportdata-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'reportdata', component: ReportdataComponent },
            { path: 'reportdata/:year', component: ReportdataDetailComponent },
            { path: 'request', component: RequestComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
