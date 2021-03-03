/* tslint:disable:no-trailing-whitespace */
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;

  onNameChange(value): void {
    this.name = value;
  }

  onDateChange(value): void {
    this.date = value;
  }

  onAmountChange(value): void {
    this.amount = parseFloat(value);
  }
}
