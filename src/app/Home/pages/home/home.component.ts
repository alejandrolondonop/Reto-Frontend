import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Affiliates } from '../../../Affiliates/interfaces/affiliate';
import { AffiliatesServiceService } from 'src/app/Affiliates/services/affiliates-service.service';
import { AppoinmentsService } from 'src/app/Appoinments/services/appoinments.service';
import { Appoinment } from 'src/app/Appoinments/interfaces/appoinments';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public title: string = 'Consultas';


  public affiliates: Affiliates[] = [];

  public appoinments: Appoinment[] = [];



  constructor(
    private affiliatesService: AffiliatesServiceService,
    private appoinmentService: AppoinmentsService,
  ) {}

  searchAffiliate(id: number) {
    this.affiliatesService.searchAffiliateByID(id).subscribe(affiliate =>{
      this.affiliates = [affiliate]
      if(affiliate.id){
        this.appoinmentService.searchAppoinmentByAffiliate(affiliate.id).subscribe(appoinment=> {
          this.appoinments = appoinment
          console.log(this.appoinments)
        })
      }
    })

  }

}
