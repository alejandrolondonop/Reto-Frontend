import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AffiliatesServiceService } from '../../services/affiliates-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Affiliates } from '../../interfaces/affiliate';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-affiliate',
  templateUrl: './update-affiliate.component.html',
  styles: [
  ]
})
export class UpdateAffiliateComponent implements OnInit {

  public title:string = 'Afiliados - Actualizar Afiliado'

  public affiliatesForm = new FormGroup({
    id: new FormControl<number | undefined>(0, {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    age: new FormControl<number>(0, {nonNullable: true}),
    email: new FormControl<string>('', {nonNullable: true}),
  })

  constructor(
    private affiliateService: AffiliatesServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar : MatSnackBar,
  ){}


  ngOnInit(): void {
    this.activateRoute.params.
    pipe(switchMap(({id})=> this.affiliateService.searchAffiliateByID(+id)),
    ).subscribe(affiliate => {
      const { id, name, age, email } = affiliate;
      this.affiliatesForm.get('name')?.setValue(name);
      this.affiliatesForm.get('age')?.setValue(age);
      this.affiliatesForm.get('email')?.setValue(email);
      this.affiliatesForm.get('id')?.setValue(id);
      console.log(affiliate)

    })
  }

  get currentAffiliate(): Affiliates {
    const affiliate = this.affiliatesForm.value as Affiliates;
    return affiliate;
  }

  onSubmit():void{
    this.affiliateService.updateAffiliate(this.currentAffiliate)
    .subscribe(affiliate => {
      this.showSnackBar(` Afiliado actualizado con éxito!`);
      this.router.navigate(['/affiliates/all'])
    })
  }

  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Hecho', {
      duration: 2500
    })
  }

}
