import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';
import { Card } from '../models/card';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit{
  form!: FormGroup;
  submitted: boolean = false;
  formBuilder : FormBuilder = new FormBuilder();
  constructor(private _fb: FormBuilder) {}
  card!: Card;
  ngOnInit() {

    this.form = this.formBuilder.group({
      creditCard: ['', [CreditCardValidators.validateCCNumber]],
      expirationDate: ['', [CreditCardValidators.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]] 
    });
  }

  onSubmit(form: any) {
    this.submitted = true;
    console.log(form);
  }

}
