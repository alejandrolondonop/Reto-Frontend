import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestServiceService } from '../../services/test-service.service';
import { Test } from '../../interfaces/test';

import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styles: [
  ]
})
export class NewTestComponent {

  public testForm = new FormGroup({
    name: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
  })

  public title: string = 'Pruebas - Nueva Prueba'

  constructor(
    private testService: TestServiceService,
    private snackBar : MatSnackBar,
    private activateRoute: ActivatedRoute,
    private router: Router){}

  get currentTest() :Test{
    const test = this.testForm.value as Test
    return test
  }


  onSubmit():void {
    this.testService.addTest(this.currentTest)
    .subscribe(test => {
      this.showSnackBar(` Prueba guardada con éxito!`);
      this.router.navigate(['/tests/all'])
    })
}

  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Hecho', {
      duration: 2500
    })
  }
}
