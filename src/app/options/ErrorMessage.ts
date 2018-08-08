export class ErrorMessage {

    constructor(
        private errorMessage:string
        ){ }

    // Getters and Setters

    getErrorMessage(){
        return this.errorMessage;
    }

    setErrorMessage(errorMessage: string){
        this.errorMessage = errorMessage;
    }

}