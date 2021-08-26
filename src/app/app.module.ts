import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        MainNavComponent,
        LoginButtonComponent,
        LogoutButtonComponent,
        SignupButtonComponent,
        AuthenticationButtonComponent,
        AuthNavComponent,
        LoadingComponent,
        FooterComponent,
        ProfileComponent,
        ProductsComponent,
        CartComponent,
        OrdersComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        AuthModule.forRoot({
            ...env.auth,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
