import {Component, Input,  SimpleChanges,  ViewChild} from '@angular/core';

import { Affiliates } from 'src/app/Affiliates/interfaces/affiliate';
import { Appoinment } from 'src/app/Appoinments/interfaces/appoinments';

@Component({
  selector: 'home-table',
  styleUrls: ['home-table.component.css'],
  templateUrl: './home-table.component.html'


})
export class HomeTableComponent {
  index!: number;

  @Input()
  public affiliates: Affiliates[] = [];

  @Input()
  public appoinments: Appoinment[] = [];

  showAppointments: boolean = false;

  toggleAppointments() {
    this.showAppointments = !this.showAppointments;
    console.log('estos son los appoinments ')
    console.log(this.appoinments)

  }

}




