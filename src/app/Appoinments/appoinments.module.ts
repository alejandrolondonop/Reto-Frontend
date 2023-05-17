import { NgModule } from '@angular/core';

import { AppoinmentsComponent } from './pages/appoinments/appoinments.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppoinmentsRoutingModule } from './appoinments-routing.module';
import { AppoinmentsTableComponent } from './components/appoinments-table/appoinments-table.component';
import { NewAppoinmentComponent } from './pages/new-appoinment/new-appoinment.component';


@NgModule({
  imports: [
    AppoinmentsRoutingModule,
    CommonModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    AppoinmentsComponent,
    AppoinmentsTableComponent,
    NewAppoinmentComponent
  ],
  providers: [],
})
export class AppoinmentsModule { }
