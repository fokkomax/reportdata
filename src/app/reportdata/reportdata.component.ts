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

  constructor(
    private mainService: MainService,
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.mainService.getYear().then(async result => {
      this.year_detail = result.rows
    })
  }

}
