import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [],
})
export class HomeModule { }