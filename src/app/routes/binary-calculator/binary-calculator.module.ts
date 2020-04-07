import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BinaryCalculatorComponent } from './binary-calculator.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    declarations: [BinaryCalculatorComponent],
    exports: [BinaryCalculatorComponent],
})
export class BinaryCalculatorModule {}