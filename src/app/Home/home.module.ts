import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeTableComponent } from './components/home-table/home-table.component';





@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule


  ],
  exports: [],
  declarations: [
    HomeComponent,
    HomeTableComponent,
  ],
  providers: [],
})
export class HomeModule { }
