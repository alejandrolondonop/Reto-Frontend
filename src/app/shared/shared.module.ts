import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';



@NgModule({
  imports:
  [RouterModule,
  CommonModule],
  exports: [
    NavBarComponent,
    HeaderComponent,
    AddBtnComponent,
  ],
  declarations: [
    NavBarComponent,
    HeaderComponent,
    AddBtnComponent
  ],
  providers: [],
})
export class SharedModule { }
