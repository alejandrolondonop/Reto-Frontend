import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AffiliatesServiceService } from '../../services/affiliates-service.service';
import { Affiliates } from '../../interfaces/affiliate';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-affiliate',
  templateUrl: './new-affiliate.component.html',
  styles: []
})
export class NewAffiliateComponent {

  public title: string = 'Afiliados - Nuevo Afiliado'

  public affiliatesForm = new FormGroup({
    name: new FormControl<string>('', {nonNullable: true}),
    age: new FormControl<number>(0, {nonNullable: true}),
    email: new FormControl<string>('', {nonNullable: true}),
  })

  constructor(private affiliateService: AffiliatesServiceService,
    private snackBar : MatSnackBar,
    private activateRoute: ActivatedRoute,
    private router: Router
    ){}

  get currentAffiliate(): Affiliates {
    const affiliate = this.affiliatesForm.value as Affiliates;
    return affiliate;
  }

  onSubmit():void{
    this.affiliateService.addAffiliate(this.currentAffiliate)
    .subscribe(affiliate => {
      this.showSnackBar(` Afiliado guardado con éxito!`);
      this.router.navigate(['/affiliates/all'])
    })
  }

  showSnackBar(message: string): void{
    this.snackBar.open(message, 'Hecho', {
      duration: 2500
    })
  }
}
