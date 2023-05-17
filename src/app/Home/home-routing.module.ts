import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: 'consultas', component: HomeComponent
  },
  {
    path: '**', redirectTo: 'home'
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class HomeRoutingModule { }
