export class OptionC {

  constructor(
    private optionName: string,
    private surname: string,
    private email: string,
    private phone_number: string,
    private sizeOfDeposit: number,
    private loanLength: number, 
    private annualSalary: number,
    private loanAmount: number,
    private isUser: boolean
    ){

  }

  // Getters and Setters

  getOptionName(){ return this.optionName; }

  setOptionName(optionName: string){ this.optionName = optionName; }

  getSurname(){ return this.surname; }

  setSurname(surname: string){ this.surname = surname; }

  getEmail(){ return this.email; }

  setEmail(email: string){ this.email = email; }

  getPhoneNumber(){ return this.phone_number; }

  setPhoneNumber(phone_number: string){ this.phone_number = phone_number; }

  getSizeOfDeposit(){ return this.sizeOfDeposit; }

  setSizeOfDeposit(sizeOfDeposit: number) { this.sizeOfDeposit = sizeOfDeposit; }

  getLoanLength(){ return this.loanLength; }

  setLoanLength(loanLength: number){ this.loanLength = loanLength; }

  getAnnualSalary(){ return this.annualSalary; }

  setAnnualSalary(annualSalary: number){ this.annualSalary = annualSalary;} 

  getLoanAmount(){ return this.loanAmount; }

  setLoanAmount(loanAmount: number){ this.loanAmount = loanAmount; }

  getIsUser(){ return this.isUser; }

  setIsUser(isUser: boolean){ this.isUser = isUser; }

  // Option C logic 

  getInterestRate(){ return 3 + 0.6; }

  getMaxLoanValue(){ 

    let salaryPlusDeposit = this.getAnnualSalary() + this.getSizeOfDeposit();

    return (salaryPlusDeposit * 5); 
  }

  isDepositEnough(){ 

    let depositSize = this.getSizeOfDeposit();

    if(depositSize >= 10000){
      return true;
    } else {
      return false;
    }
  }

  isAccountRequired(){ return false; }

  getAmountRepayable(){

    let loanAmount = this.getLoanAmount();

    let amountRepayable = loanAmount * (1 + (this.getInterestRate()/100));

    return amountRepayable;

  }

  getMonthlyRepayment(){
    let loanLength = this.getLoanLength();

    let amountRepayable = this.getAmountRepayable();

    let monthlyRepayment = amountRepayable/loanLength;

    return monthlyRepayment.toFixed(2);
  }

  /*
  * This is to check if this option is valid
  */
  validForOption(){

    return this.getMaxLoanValue() >= this.getLoanAmount() &&
      this.getLoanLength() == 20 && this.isAccountRequired() == false && 
      this.isDepositEnough() == true;

  }

}

