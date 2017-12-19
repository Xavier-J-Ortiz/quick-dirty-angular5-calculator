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
  constructor(private operationService: OperationsService) { }

  ngOnInit() {
  }

}
