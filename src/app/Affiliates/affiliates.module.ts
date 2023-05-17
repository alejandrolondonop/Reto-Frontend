import { NgModule } from '@angular/core';
import { AffiliatesComponent } from './pages/affiliates/affiliates.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { AffiliatesTableComponent } from './components/affiliates-table/affiliates-table.component';
import { NewAffiliateComponent } from './pages/new-affiliate/new-affiliate.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AffiliatesRoutingModule
  ],
  exports: [],
  declarations: [AffiliatesComponent, AffiliatesTableComponent, NewAffiliateComponent],
  providers: [],
})
export class AffiliatesModule { }
