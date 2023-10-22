import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeAnimation2 } from '../route-animations';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-reportdata-detail',
  templateUrl: './reportdata-detail.component.html',
  styleUrls: ['./reportdata-detail.component.scss'],
  animations: [fadeAnimation2],
})
export class ReportdataDetailComponent {

  active_year: any
  report_list: any

  constructor(
    private _Activatedroute: ActivatedRoute,
    private mainService: MainService,
  ) {
    this.active_year = this._Activatedroute.snapshot.params['year'];
  }

  async ngOnInit(): Promise<void> {
    this.mainService.getReport(this.active_year).then(async result => {
      this.report_list = result.rows
    })
  }

}