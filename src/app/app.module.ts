import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ReportsGateway } from './api/domain/reports-gateway';
import { ReportsFirebaseService } from './api/infraestructure/firebase/reports-firebase.service';
import { SalesGateway } from './api/domain/sales-gateway';
import { SalesFirebaseService } from './api/infraestructure/firebase/sales-firebase.service';
import { LoginComponent } from './auth/login/login.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginGateway } from './auth/login/domain/login-gateway';
import { MagicLinkComponent } from './auth/magic-link/magic-link.component';
import { AccountComponent } from './pages/profile/account/account.component';
import { LoginService } from './auth/login/infraestructure/node/login-node.service';
import { StoreModule } from '@ngrx/store';
import { languageReducer } from './state/language/language.reducers';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MagicLinkComponent,
    LoginComponent,
    AppComponent,
    AccountComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ lang: languageReducer }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: ReportsGateway,
      useClass: ReportsFirebaseService
    },
    {
      provide: SalesGateway,
      useClass: SalesFirebaseService
    },
    {
      provide: LoginGateway,
      useClass: LoginService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
