import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './pages/cart/cart.component';
import { LogoutComponent } from './pages/logout/logout.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent },
    { path: 'cart', component: CartComponent },
    { path: 'logout', component: LogoutComponent },
 { path: '', redirectTo: '/main', pathMatch: 'full' },
];
