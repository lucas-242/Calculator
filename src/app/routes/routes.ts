import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';

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
            }
        ]
    }
];