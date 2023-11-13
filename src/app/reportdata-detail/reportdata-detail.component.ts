import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeAnimation2 } from '../route-animations';
import { MainService } from '../service/main.service';
import { Table } from 'primeng/table';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-reportdata-detail',
  templateUrl: './reportdata-detail.component.html',
  styleUrls: ['./reportdata-detail.component.scss'],
  animations: [fadeAnimation2],
})
export class ReportdataDetailComponent {

  active_year: any
  report_list: any = [];
  tableHeader: any = [];

  userDetail: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private mainService: MainService,
    private loginService: LoginService,
    private route: Router
  ) {
    this.active_year = this._Activatedroute.snapshot.params['year'];
    this.tableHeader = [
      { field: 'hcode', header: 'รหัสสถานบริการ' },
    ]
  }

  async ngOnInit(): Promise<void> {
    this.mainService.getReport(this.active_year).then(async result => {
      this.report_list = result.rows
    })
    this.mainService.getTableHeader(this.active_year).then(async result => {
      for (let i = 0; i < result.reccount; i++) {
        this.tableHeader.push(result.rows[i])
      }
    })
    if(this.loginService.decodeToken()){
      this.route.navigate(['login']);
    };
  }

  clear(table: Table) {
    table.clear();
  }

}