import { Routes } from '@angular/router';
import { IntroductionDocComponent } from './core/docs/introduction.component';
import { Tooltip } from './features/tooltip/tooltip';

export const routes: Routes = [
    { path: 'introduction', component: IntroductionDocComponent },
    { path: 'tooltip', component: Tooltip },
    { path: 'tabs', loadComponent: () => import('./features/tabs/tabs').then(m => m.TabsComponent) },
    { path: 'accordion', loadComponent: () => import('./features/accordion/accordion').then(m => m.AccordionComponent) },
    { path: 'dialog', loadComponent: () => import('./features/dialog/dialog').then(m => m.DialogComponent) },
    { path: 'select', loadComponent: () => import('./features/select/select-demo/select-demo.component').then(m => m.SelectDemoComponent) },
    { path: '', redirectTo: '/introduction', pathMatch: 'full' },
    { path: '**', redirectTo: '/introduction' }
];
