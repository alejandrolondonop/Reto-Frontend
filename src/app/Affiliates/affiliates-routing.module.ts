import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliatesComponent } from './pages/affiliates/affiliates.component';
import { NewAffiliateComponent } from './pages/new-affiliate/new-affiliate.component';
import { UpdateAffiliateComponent } from './pages/update-affiliate/update-affiliate.component';

const routes: Routes = [
  {
    path: 'all', component: AffiliatesComponent
  },
  {
    path: 'new', component: NewAffiliateComponent
  },
  {
    path: 'update', component: UpdateAffiliateComponent
  },
  {
    path: '***', redirectTo: 'home'
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AffiliatesRoutingModule { }
