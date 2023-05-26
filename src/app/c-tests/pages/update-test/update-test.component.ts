import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Test } from '../../interfaces/test';
import { TestServiceService } from '../../services/test-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styles: [
  ]
})
export class UpdateTestComponent  implements OnInit{

  public title:string = 'Pruebas - Actualizar Prueba'


  public testForm = new FormGroup({
    id: new FormControl<number | undefined>(0, {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
  })

  constructor(
    private testService: TestServiceService,
    private snackBar : MatSnackBar,
    private activateRoute: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.activateRoute.params.
    pipe(switchMap(({id})=> this.testService.searchTestByID(+id)),
    ).subscribe(test => {
      const {id, name, description} = test;
      this.testForm.get('id')?.setValue(id);
      this.testForm.get('name')?.setValue(name);
      this.testForm.get('description')?.setValue(description);
      console.log(this.currentTest);

    })
  }

  get currentTest() :Test{
    const test = this.testForm.value as Test
    return test
  }


  onSubmit():void {
    this.testService.updateTest(this.currentTest)
    .subscribe(test => {
      this.showSnackBar(` Prueba actualizada con éxito!`);
      this.router.navigate(['/tests/all'])
    })
}

  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Hecho', {
      duration: 2500
    })
  }
}

