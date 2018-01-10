import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numOne: number;
  numTwo: number;
  answer: number;
  dotSaverOne: string;
  dotSaverTwo: string;
  operationSaver: string;

  add() {
    this.answer = this.operationService.addition(this.numOne, this.numTwo);
  }

  sub() {
    this.answer = this.operationService.subtraction(this.numOne, this.numTwo);
  }
  mult() {
    this.answer = this.operationService.multiplication(this.numOne, this.numTwo);
  }
  divi() {
    this.answer = this.operationService.division(this.numOne, this.numTwo);
  }
  executeOperation(theOperation) {
    switch (theOperation) {
      case '+': {
        this.add();
        break;
      }
      case '-': {
        this.sub();
        break;
      }
      case '*': {
        this.mult();
        break;
      }
      case '/': {
        this.divi();
        break;
      }
    }
  }
  stringHelper(appendNumber) {
    if (!this.operationSaver) {
      if (appendNumber !== '.') {
        if (!(this.dotSaverOne)) {
          this.numOne = Number(String(this.numOne ? this.numOne : '') + String(appendNumber));
        } else {
          this.numOne = Number(this.dotSaverOne + String(appendNumber));
          this.dotSaverOne = null;
        }
      } else {
        this.dotSaverOne = String(this.numOne ? this.numOne : '0') + '.';
      }
    } else {
      if (appendNumber !== '.') {
        if (!(this.dotSaverTwo)) {
          this.numTwo = Number(String(this.numTwo ? this.numTwo : '') + String(appendNumber));
        } else {
          this.numTwo = Number(this.dotSaverTwo + String(appendNumber));
          this.dotSaverTwo = null;
        }
      } else {
        this.dotSaverTwo = String(this.numTwo ? this.numTwo : '0') + '.';
      }
    }
  }
  clear() {
    this.numOne = null;
    this.numTwo = null;
    this.dotSaverOne = null;
    this.dotSaverTwo = null;
    this.answer = null;
    this.operationSaver = null;
  }
  constructor(private operationService: OperationsService) { }

  ngOnInit() {
  }
}
