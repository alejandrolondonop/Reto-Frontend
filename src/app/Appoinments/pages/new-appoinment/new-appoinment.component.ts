import { Component, OnInit } from '@angular/core';
import { AppoinmentsService } from '../../services/appoinments.service';
import { Appoinment } from '../../interfaces/appoinments';
import { Test } from 'src/app/c-tests/interfaces/test';
import { Affiliates } from 'src/app/Affiliates/interfaces/affiliate';

@Component({
  selector: 'app-new-appoinment',
  templateUrl: './new-appoinment.component.html',
  styles: [
  ]
})
export class NewAppoinmentComponent  implements OnInit{
  public title: string = 'Citas - Nueva cita'
  public tests: Test[] = [];
  public affiliates: Affiliates[] = []

  constructor( private apoinmentService : AppoinmentsService){}


  ngOnInit(): void {
    this.apoinmentService.searchTest()
    .subscribe(tests => {
      this.tests = tests;
    });

    this.apoinmentService.searchAffiliate()
    .subscribe(affiliates => {
      this.affiliates  = affiliates;
    })
}


}
