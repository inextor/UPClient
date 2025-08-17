import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './pages/cart/cart.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HelpComponent } from './pages/help/help.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ListEcommerceItemComponent } from './pages/list-ecommerce-item/list-ecommerce-item.component';
import { ListEcommerceUserComponent } from './pages/list-ecommerce-user/list-ecommerce-user.component';
import { SaveEcommerceUserComponent } from './pages/save-ecommerce-user/save-ecommerce-user.component';
import { PanelInformativoComponent } from './pages/panel-informativo/panel-informativo.component';
import { ConfirmOrderComponent } from './pages/confirm-order/confirm-order.component';
import { SolicitarCotizacionComponent } from './pages/solicitar-cotizacion/solicitar-cotizacion.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent },
    { path: 'cart', component: CartComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'product-detail/:item_id', component: ProductDetailComponent },
    { path: 'help', component: HelpComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'list-ecommerce-item', component: ListEcommerceItemComponent },
    { path: 'list-ecommerce-user', component: ListEcommerceUserComponent },
    { path: 'add-ecommerce-user', component: SaveEcommerceUserComponent },
    { path: 'edit-ecommerce-user/:id', component: SaveEcommerceUserComponent },
    { path: 'panel-informativo', component: PanelInformativoComponent },
    { path: 'confirm-order', component: ConfirmOrderComponent },
    { path: 'solicitar-cotizacion', component: SolicitarCotizacionComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
];
