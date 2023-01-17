import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from '../models/card';
import { CreditCardValidators } from 'angular-cc-library';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  success:Boolean = false;
  errorBE: string = "";
  title: String = "New Card"
  form!: FormGroup;
  submitted: boolean = false;
  formBuilder : FormBuilder = new FormBuilder();
  constructor(private cardService: CardService) {}
  card: Card = new Card();
  ngOnInit() {

    this.form = this.formBuilder.group({
      creditCard: ['', [CreditCardValidators.validateCCNumber]],
      expirationDate: ['', [CreditCardValidators.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]] 
    });
  }

  onSubmit(form: any) {
    this.submitted = true;
    this.errorBE = "";
    if(form.form.status==="VALID"){
      var splitted = form.form.value.expirationDate.split(" / ", 2); 
      this.card.code=form.form.value.creditCard;
      this.card.month = Number(splitted[0]);
      this.card.year = Number(splitted[1]);
      this.card.CVV = Number(form.form.value.cvv);
      console.log(this.card);
      this.cardService.addCard(this.card).subscribe(
        data=> {
          this.success=true;
        },
        error=>{
          this.errorBE = error.error;
        }
      )
    }

      console.log(form.form.value);
  }
  }