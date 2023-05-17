import { NgModule } from '@angular/core';
import { TestsComponent } from './pages/tests/tests.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { TestTableComponent } from './components/test-table/test-table.component';
import { NewTestComponent } from './pages/new-test/new-test.component';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    TestRoutingModule
  ],
  exports: [],
  declarations: [
    TestsComponent,
    TestTableComponent,
    NewTestComponent
  ],
  providers: [],
})
export class TestModule { }