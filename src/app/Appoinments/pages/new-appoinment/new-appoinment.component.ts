import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { AppoinmentsService } from '../../services/appoinments.service';
import { Appoinment } from '../../interfaces/appoinments';
import { Test } from 'src/app/c-tests/interfaces/test';
import { Affiliates } from 'src/app/Affiliates/interfaces/affiliate';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-new-appoinment',
  templateUrl: './new-appoinment.component.html',
  styles: []
})
export class NewAppoinmentComponent implements OnInit {
  public title: string = 'Citas - Nueva cita';
  public tests: Test[] = [];
  public affiliates: Affiliates[] = [];



  public appoinmentForm = new FormGroup({
    date: new FormControl<string>('', { nonNullable: true }),
    hour: new FormControl<string>('', { nonNullable: true }),
    idTest: new FormControl<number>(0, { nonNullable: true }),
    idAffiliates: new FormControl<number>(0, { nonNullable: true }),
  });



  constructor(
    private apoinmentService: AppoinmentsService,
    private datePipe: DatePipe,
    private snackBar : MatSnackBar,
    private activateRoute: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.apoinmentService.searchTest().subscribe((tests) => {
      this.tests = tests;
    });

    this.apoinmentService.searchAffiliate().subscribe((affiliates) => {
      this.affiliates = affiliates;
    });

  }


  get currentAppoinment(): Appoinment {
    const appoinment = this.appoinmentForm.value as Appoinment;
    return appoinment;
  }


  onSubmit(): void {
    this.currentAppoinment.date =  moment(this.currentAppoinment.date).format('DD/MM/YYYY');
    console.log(this.currentAppoinment);
    this.apoinmentService.addAppoinmet(this.currentAppoinment).subscribe((appoinment) => {
      this.showSnackBar(` Cita guardada con éxito!`);
      this.router.navigate(['/appoinments/all'])
    });


  }

  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Hecho', {
      duration: 2500
    })
  }



}
