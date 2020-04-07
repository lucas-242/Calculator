import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { HomeModule } from './home/home.module';
import { DigitalCalculatorModule } from './digital-calculator/digital-calculator.module';
import { BinaryCalculatorModule } from './binary-calculator/binary-calculator.module';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule,
        DigitalCalculatorModule,
        BinaryCalculatorModule
    ],
    exports: [
        RouterModule,
        HomeModule,
        DigitalCalculatorModule,
        BinaryCalculatorModule
    ],
})

export class RoutesModule {}