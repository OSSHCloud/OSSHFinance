import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './layout/menu/menu.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  PB_DIRECTION,
  SPINNER,
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#dee2e6',
  pbColor: '#dee2e6',
  bgsOpacity: 0.1,
  fgsType: SPINNER.threeBounce,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 3,
  // "minTime": 3000,
  overlayColor: 'rgba(40, 40, 40, 0.1)',
};

@NgModule({ declarations: [
        AppComponent,
        MenuComponent,
        TopBarComponent,
        LayoutComponent,
        MenuItemComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        NgxUiLoaderRouterModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        NgxUiLoaderHttpModule.forRoot({
            showForeground: true,
            // excludeRegexp: [
            // '',
            // ],
        })], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
