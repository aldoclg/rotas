import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'login', component: LoginComponent },
    { path: '',      component: HomeComponent } 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
