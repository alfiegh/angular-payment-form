import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  inputDate: string = '';
  amount!: number;
  height!: number;
  miles!: number;

  car = {
    make: 'Tesla',
    model: 'Model 3',
    year: 2015,
  };

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.inputDate = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
}
