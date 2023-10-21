import { Component } from '@angular/core';
import { fadeAnimation2 } from '../route-animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeAnimation2],
})
export class DashboardComponent {

}
