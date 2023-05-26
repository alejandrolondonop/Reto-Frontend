import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { AppoinmentsService } from '../../services/appoinments.service';
import { DatePipe, formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from 'src/app/c-tests/interfaces/test';
import { Affiliates } from 'src/app/Affiliates/interfaces/affiliate';
import { Appoinment } from '../../interfaces/appoinments';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-update-appoinment',
  templateUrl: './update-appoinment.component.html',
  styles: [
  ]
})
export class UpdateAppoinmentComponent implements OnInit{

  public title: string = 'Citas - Actualizar Cita';
  public tests: Test[] = [];
  public affiliates: Affiliates[] = [];

  public appoinmentForm = new FormGroup({
    id: new FormControl<number | undefined>(0, {nonNullable: true}),
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


      this.activateRoute.params.
      pipe(switchMap(({id})=> this.apoinmentService.searchAppoinmentByID(+id)),
      ).subscribe(appoinment => {
        const {id, date, hour, idTest, idAffiliates} = appoinment;
        function formatDate(dateString: string) {
          const parts = dateString.split('/');
          const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
          return formattedDate;
        }
        const formattedDate = formatDate(date);
        this.appoinmentForm.get('id')?.setValue(id);
        this.appoinmentForm.get('date')?.setValue(formattedDate);
        this.appoinmentForm.get('hour')?.setValue(hour);
        this.appoinmentForm.get('idTest')?.setValue(idTest);
        this.appoinmentForm.get('idAffiliates')?.setValue(idAffiliates);

        console.log(appoinment)
      })



  }


  get currentAppoinment(): Appoinment {
    const appoinment = this.appoinmentForm.value as Appoinment;
    return appoinment;
  }


  onSubmit(): void {
    this.currentAppoinment.date =  moment(this.currentAppoinment.date).format('DD/MM/YYYY');
    console.log(this.currentAppoinment);
    this.apoinmentService.updateAppoinment(this.currentAppoinment).subscribe((appoinment) => {
      this.showSnackBar(` Cita Actualizada con éxito!`);
      this.router.navigate(['/appoinments/all'])
    });


  }

  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Hecho', {
      duration: 2500
    })
  }


}
