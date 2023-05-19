import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsComponent } from './pages/tests/tests.component';
import { NewTestComponent } from './pages/new-test/new-test.component';
import { UpdateTestComponent } from './pages/update-test/update-test.component';

const routes : Routes = [
  {
    path: 'all', component: TestsComponent
  },
  {
    path: 'new', component: NewTestComponent
  },
  {
    path: 'update', component: UpdateTestComponent
  },
  {
    path: '***', redirectTo: 'home'
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [],
})
export class TestRoutingModule { }
