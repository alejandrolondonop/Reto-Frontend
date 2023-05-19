import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentsComponent } from './pages/appoinments/appoinments.component';
import { NewAppoinmentComponent } from './pages/new-appoinment/new-appoinment.component';
import { UpdateAppoinmentComponent } from './pages/update-appoinment/update-appoinment.component';

const routes : Routes = [
  {
    path: 'all', component: AppoinmentsComponent
  },
  {
    path: 'new', component: NewAppoinmentComponent
  },
  {
    path: 'update', component: UpdateAppoinmentComponent
  },
  {
    path: '***', redirectTo: 'home'
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppoinmentsRoutingModule { }
