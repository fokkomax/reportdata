import { Component } from '@angular/core';
import { fadeAnimation2 } from '../route-animations';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-reportdata',
  templateUrl: './reportdata.component.html',
  styleUrls: ['./reportdata.component.scss'],
  animations: [fadeAnimation2],
})
export class ReportdataComponent {

  year_detail: any;
  active_year: any;
  not_active_year: any;

  constructor(
    private mainService: MainService,
  ) {

  }

  async ngOnInit(): Promise<void> {
    //--- GET NOT ACTIVE YEAR
    this.mainService.getYearNotActive().then(async result => {
      this.not_active_year = result.rows
    })
    //--- GET ACTIVE YEAR
    this.mainService.getYearActive().then(async result => {
      this.active_year = result.rows
    })
  }

}
