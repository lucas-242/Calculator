import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';
import { DigitalCalculatorComponent } from './digital-calculator/digital-calculator.component';
import { BinaryCalculatorComponent } from './binary-calculator/binary-calculator.component';

export const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                children: [
                    { path: '', component: HomeComponent }
                ]
            },
            {
                path: 'digital',
                children: [
                    { path: '', component: DigitalCalculatorComponent }
                ]
            },
            {
                path: 'binary',
                children: [
                    { path: '', component: BinaryCalculatorComponent }
                ]
            }
        ]
    }
];