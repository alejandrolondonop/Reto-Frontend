import { SharedModule } from './../shared/shared.module';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeTableComponent } from './components/home-table/home-table.component';
import { SearchByAffiliateComponent } from './components/search-by-affiliate/search-by-affiliate.component';
import { SearchByDateComponent } from './components/search-by-date/search-by-date.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../material/material.module';






@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule


  ],
  exports: [],
  declarations: [
    HomeComponent,
    HomeTableComponent,
    SearchByAffiliateComponent,
    SearchByDateComponent,
  ],
  providers: [],
})
export class HomeModule { }
