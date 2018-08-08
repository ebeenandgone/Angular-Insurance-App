import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionA } from './options/OptionA';
import { OptionB } from './options/OptionB';
import { OptionC } from './options/OptionC';
import { OptionD } from './options/OptionD';
import { OptionE } from './options/OptionE';
import { ErrorMessage } from './options/ErrorMessage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  rForm: FormGroup;
  quote:any;
  surname:string = '';
  email:string = '';
  phone_number:string = '';
  sizeOfDeposit:number = 0;
  loanLength:number = 0;
  annualSalary:number = 0;
  loanAmount:number = 0;
  isUser:boolean = false;

  titleAlert:string = 'This field is required.';
  emailAlert:string = 'Please enter a valid email.';
  phoneAlert:string = 'Please enter a valid 10-digit phone number.'
  optionsArray = [];
  errorArray = [];

  constructor(private fb: FormBuilder) {

    // Has basic pattern matching to check when number is required if number is given
    // Also has  validator to check if valid email address given 
    this.rForm = fb.group({
      'surname' : [null, Validators.required],
      'email' : [null, Validators.compose([ Validators.required, Validators.email ])],
      'phone_number' : [null, Validators.compose([ Validators.required, Validators.pattern(/^[0-9]*/) ])],
      'sizeOfDeposit' : [null, Validators.compose([ Validators.required, Validators.pattern(/^[0-9]*/) ])],
      'loanLength' : [null, Validators.compose([ Validators.required, Validators.pattern(/^[0-9]*/) ])],
      'annualSalary' : [null, Validators.compose([ Validators.required, Validators.pattern(/^[0-9]*/) ])],
      'loanAmount' : [null, Validators.compose([ Validators.required, Validators.pattern(/^[0-9]*/) ])],
      'isUser' : [null, Validators.required]
    })
  }

  quoteData(quote){
    this.optionsArray = [];
    this.errorArray = [];

    this.surname = quote.surname;
    this.email = quote.email;
    this.phone_number  = quote.phone_number;
    this.sizeOfDeposit = quote.sizeOfDeposit;
    this.loanLength = quote.loanLength;
    this.annualSalary = quote.annualSalary;
    this.loanAmount = quote.loanAmount;
    this.isUser = quote.isUser;

    let optionA = new OptionA("A", this.surname, this.email, this.phone_number,
      this.sizeOfDeposit, this.loanLength, this.annualSalary,
      this.loanAmount, this.isUser);

    let optionB = new OptionB("B", this.surname, this.email, this.phone_number,
      this.sizeOfDeposit, this.loanLength, this.annualSalary,
      this.loanAmount, this.isUser);

    let optionC = new OptionC("C", this.surname, this.email, this.phone_number,
      this.sizeOfDeposit, this.loanLength, this.annualSalary,
      this.loanAmount, this.isUser);

    let optionD = new OptionD("D", this.surname, this.email, this.phone_number,
      this.sizeOfDeposit, this.loanLength, this.annualSalary,
      this.loanAmount, this.isUser);

    let optionE = new OptionE("E", this.surname, this.email, this.phone_number,
      this.sizeOfDeposit, this.loanLength, this.annualSalary,
      this.loanAmount, this.isUser);

    if(optionA.validForOption()){
      this.optionsArray.push(optionA);
      console.log(this.optionsArray + "a");
    } else {}

    if(optionB.validForOption()){
      this.optionsArray.push(optionB);
      console.log(this.optionsArray + "b");
    }

    if(optionC.validForOption()){
      this.optionsArray.push(optionC);
      console.log(this.optionsArray + "c");
    }

    if(optionD.validForOption()){
      this.optionsArray.push(optionD);
      console.log(this.optionsArray + "d");
    }

    if(optionE.validForOption()){
      this.optionsArray.push(optionE);
      console.log(this.optionsArray + "e");
    }

    // Logic to order the table by lowest monthly repayment first
    function compare(a,b) {
      if (a.getMonthlyRepayment() < b.getMonthlyRepayment())
        return -1;
      if (a.getMonthlyRepayment() > b.getMonthlyRepayment())
        return 1;
      return 0;
    }

    // This sorts the table displaying the lowest monthly repayment first 
    this.optionsArray.sort(compare);

    let errorMessage = new ErrorMessage("No Option available");

    // This checks if the optionsArray has anything valid within it and 
    // Makes sure it's not null 
    if (typeof this.optionsArray[0] == 'undefined' &&
     this.optionsArray[0] == null) {
      this.errorArray.push(errorMessage);
    }

  }

  // Clears the quote table by emptying the optionsArray  
  // Setting all the variables to null removes the tables also, 
  // but I've kept this in as a stylistic decision
  clearQuote(quote){
    // this.surname = null;
    // this.email = null;
    // this.phone_number  = null;
    // this.sizeOfDeposit = null;
    // this.loanLength = null;
    // this.annualSalary = null;
    // this.loanAmount = null;
    // this.isUser = null;

    this.optionsArray = [];
    this.errorArray = [];

  }

  // Logic for checking if phone numbers are correct
  // Similar to currencyCheck but this includes + and - 
  // symbols (including brackets) for phone numbers 
  phoneCheck(event: any) {
    const pattern = /[0-9\+\-\(\)\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  // Logic to test if currencies are numbers
  currencyCheck(event: any) {
    const pattern = /[0-9\ ]/;

    let inputChar = String.fromCharCode(event.charCode);

    // keyCode get's the unicode from the keyboad and
    // makes sure the characters aren't being typed and 
    // therefore only accepts numbers
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
