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
  dotSaver: string;

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
  stringHelper(appendNumber) {
    if (appendNumber !== '.') {
      if (!(this.dotSaver)) {
        this.numOne = Number(String(this.numOne ? this.numOne : '') + String(appendNumber));
      }
      else {
        this.numOne = Number(this.dotSaver + String(appendNumber));
        this.dotSaver = null;
      }
    }
    else {
      this.dotSaver = String(this.numOne ? this.numOne : '0') + '.';
    }
  }
  clear() {
    this.numOne = null;
  }
  constructor(private operationService: OperationsService) { }

  ngOnInit() {
  }
}
