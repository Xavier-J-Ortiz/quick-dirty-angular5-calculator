import { CalculatorComponent } from './calculator/calculator.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OperationsService } from './operations.service';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
