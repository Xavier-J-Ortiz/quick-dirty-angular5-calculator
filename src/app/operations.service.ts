import { Injectable } from '@angular/core';

@Injectable()
export class OperationsService {

  answer: number = null;

  addition(numOne: number, numTwo: number) {
    answer = numOne + numTwo;
  }

  subtraction(numOne: number, numTwo: number) {
    answer = numOne - numTwo;
  }

  multiplication(numOne: number, numTwo: number) {
    answer = numOne * numTwo;
  }

  division(numOne: number, numTwo: number) {
    answer = numOne / numTwo;
  }

  constructor() { }

}
