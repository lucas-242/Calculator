import { Component, OnInit } from '@angular/core';
import { Button } from 'src/app/entities/button';

@Component({
  selector: 'app-digital-calculator',
  templateUrl: './digital-calculator.component.html',
  styleUrls: ['./digital-calculator.component.scss']
})
export class DigitalCalculatorComponent implements OnInit {


  //TODO: TROCAR A FUNÇÃO DO BOTÃO %, REVER A FUNÇÃO DE +/-
  //TODO: Verificar se o último digito é um zero dps do operador, e se é um operador dps de operador

  private linesOfButtons = new Array<Array<Button>>();

  private screen = "";

  private lastInput: Button;

  constructor() { }

  ngOnInit() {
    this.setLineButtons();
  }

  onClickButton(value: Button) {

    if (this.lastInput && this.lastInput.type === 'operator' && value.type === 'operator') {
      return;
    }

    if (value.type === 'action') {
      this.switchAction(value);
      return;
    }
    else if (value.type === 'signal') {
      this.switchSignal(value);
      return;
    }

    this.screen += value.value;
    this.lastInput = value;
  }

  switchAction(button: Button) {
    switch (button.value) {
      case ('<-'): {
        this.screen = this.screen.slice(0, -1);

        //TODO: Refatorar essa atrocidade
        if (this.screen.length > 0) {
          this.lastInput = this.linesOfButtons.find(
            lines => lines.find(buttons => buttons.value == this.screen.substr(this.screen.length - 1)
            ) != undefined).find(button => button.value == this.screen.substr(this.screen.length - 1));
          break;
        }
      }

      case ('CE'): {
        this.screen = "";
        break;
      }

      case ('='): {
        if (this.lastInput && this.lastInput.type === 'operator') {
          this.screen = this.screen.slice(0, -1);
          this.lastInput = null;
          break;
        }

        this.screen = eval(this.screen);
        this.screen = this.screen.toString();
        this.lastInput = null;
        break;
      }

    }
  }

  switchSignal(button: Button) {
    
    switch(button.value) {
      case('+/-'): {
        this.changeNegative();
        break;
      }

      case('.'): {
        if(this.lastInput && this.lastInput.type === 'number') {
          this.screen += '.';
        }
        break;
      }
    }
  }

  changeNegative() {
    if (this.screen.length === 0) { this.screen = '-'; return; };
    if (this.screen === '-' || this.screen === '+') { this.screen = this.screen === '+' ? '-' : '+' ; return; };

    let result = this.screen.match(/\d+$/);
    let lastNumber = result[0];
    let index = +result['index'];

    // if (this.screen[index - 1] === undefined || this.screen[index - 1] === '-' || this.screen[index - 1] === '+') {
    let signal = this.screen[index - 1];
    let firstPart = this.screen.substring(0, index - 1);

    signal = signal !== '-' || signal === undefined ? '-' : '+';

    let finalString = firstPart + signal + lastNumber;
    this.screen = finalString;
    // }
  }

  setLineButtons() {
    let line0 = [new Button('CE', 'action'), new Button('<-', 'action'),
     new Button('/', 'operator')];

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
