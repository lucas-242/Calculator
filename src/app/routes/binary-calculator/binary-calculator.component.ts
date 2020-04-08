import { Component, OnInit } from '@angular/core';
import { Button } from 'src/app/entities/button';

@Component({
  selector: 'app-binary-calculator',
  templateUrl: './binary-calculator.component.html',
  styleUrls: ['./binary-calculator.component.scss']
})
export class BinaryCalculatorComponent implements OnInit {

  linesOfButtons = new Array<Array<Button>>();

  screen = "";
  lastInput: Button;

  constructor() { }

  ngOnInit() {
    this.setLineButtons();
  }

  onClickButton(value: Button) {

    if (this.lastInput && this.lastInput.type === 'operator' && value.type === 'operator') {
      return;
    }

    if (value.type === 'action') {
      if (this.lastInput && this.lastInput.type === 'operator') {
        this.screen = this.screen.slice(0, -1);
        this.lastInput = null;
        return;
      }

      let result = this.screen.split('+');
      let numbers = new Array<number>();
      result.forEach(number => {
        numbers.push(parseInt(number, 2));
      });

      this.screen = numbers.reduce((a, b) => a + b, 0).toString(2);
      this.lastInput = null;
      return;
    }

    this.screen += value.value;
    this.lastInput = value;
  }

  setLineButtons() {

    let line0 = [new Button('1', 'number'), new Button('0', 'number'),
    new Button('+', 'operator'), new Button('=', 'action')];

    this.linesOfButtons.push(line0);
  }

}
