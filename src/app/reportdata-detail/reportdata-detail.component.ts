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
      { field: 'ZONE_SERVICE_ID', header: 'เขต' },
      { field: 'PROVINCE_NAME', header: 'จังหวัด' },
      { field: 'SUBDIV_CODE', header: 'รหัส' },
      { field: 'SUBDIV_NAME', header: 'ชื่อโรงพยาบาล' },
      { field: 'HOSPITAL_TYPE_SERVICE_NAME_TYPE', header: 'Service Plan' },
    ]
  }

  async ngOnInit(): Promise<void> {
    this.getFullReport();
    this.mainService.getTableHeader(this.active_year).then(async result => {
      for (let i = 0; i < result.reccount; i++) {
        this.tableHeader.push(result.rows[i])
      }
    })
  }

  async getFullReport(){
    this.mainService.getFullReport(this.active_year).then(async result => {
      this.report_list = result.rows
    })
  }

  clear(table: Table) {
    table.clear();
    this.getFullReport()
  }

}