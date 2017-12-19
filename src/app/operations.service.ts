import { Injectable } from '@angular/core';

@Injectable()
export class OperationsService {

  addition(numOne: number, numTwo: number) {
   const answer = numOne + numTwo;
   return answer;
  }

  subtraction(numOne: number, numTwo: number) {
    const answer = numOne - numTwo;
    return answer;
  }

  multiplication(numOne: number, numTwo: number) {
    const answer = numOne * numTwo;
    return answer;
  }

  division(numOne: number, numTwo: number) {
    const answer = numOne / numTwo;
    return answer;
  }

  constructor() { }

}
