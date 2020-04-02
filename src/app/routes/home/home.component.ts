import { Component, OnInit } from '@angular/core';
import { Button } from 'src/app/entities/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //TODO: TROCAR A FUNÇÃO DO BOTÃO %, REVER A FUNÇÃO DE +/-

  private linesOfButtons = new Array<Array<Button>>();

  private screen = "";

  constructor() { }

  ngOnInit() {
    this.setLineButtons();
  }

  onClickButton(value: Button) {

    if (value.type == 'action') {
      this.switchAction(value);
      return;
    }
    else if (value.type == 'signal') {
      this.switchSignal();
      return;
    }

    this.screen += value.value;
  }

  switchAction(button: Button) {
    switch (button.value) {
      case ('<-'): {
        this.screen = this.screen.slice(0, -1);
        break;
      }

      case ('CE'): {
        this.screen = "";
        break;
      }

      case ('='): {
        this.screen = eval(this.screen) as string;
        break;
      }

    }
  }

  switchSignal() {
    let result = this.screen.match(/\d+$/);
    let lastNumber = result[0];
    let index = +result['index'];

    if (this.screen[index - 1] === '-' || this.screen[index - 1] === '+') {
      let signal = this.screen[index - 1];
      let firstPart = this.screen.substring(0, index - 1);

      signal = signal === '-' ? '+' : '-';

      let finalString = firstPart + signal + lastNumber;
      this.screen = finalString;
    }
  }

  setLineButtons() {
    let line0 = [new Button('CE', 'action'), new Button('<-', 'action'), 
    new Button('%', 'operator'), new Button('/', 'operator')];

    let line1 = [new Button('7', 'number'), new Button('8', 'number'),
    new Button('9', 'number'), new Button('*', 'operator')];

    let line2 = [new Button('4', 'number'), new Button('5', 'number'),
    new Button('6', 'number'), new Button('-', 'operator')];

    let line3 = [new Button('1', 'number'), new Button('2', 'number'),
    new Button('3', 'number'), new Button('+', 'operator')];

    let line4 = [new Button('+/-', 'signal'), new Button('0', 'number'),
    new Button('.', 'signal'), new Button('=', 'action')];

    this.linesOfButtons.push(line0, line1, line2, line3, line4);
  }
}
