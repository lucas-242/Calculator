import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DigitalCalculatorComponent } from './digital-calculator.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    declarations: [DigitalCalculatorComponent],
    exports: [DigitalCalculatorComponent],
})
export class DigitalCalculatorModule {}