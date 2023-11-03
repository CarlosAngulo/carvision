import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ReportsGateway } from './api/domain/reports-gateway';
import { ReportsFirebaseService } from './api/infraestructure/firebase/reports-firebase.service';
import { SalesGateway } from './api/domain/sales-gateway';
import { SalesFirebaseService } from './api/infraestructure/firebase/sales-firebase.service';
import { LoginComponent } from './auth/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginGateway } from './auth/login/domain/login-gateway';
import { LoginFirebaseService } from './auth/login/infraestructure/firebase/login.service';
import { MagicLinkComponent } from './auth/magic-link/magic-link.component';
import { AccountComponent } from './pages/profile/account/account.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhasfCyq_NnHN3v3UUISrRNs9ddjeqUX4",
  authDomain: "car-sales-1dcac.firebaseapp.com",
  projectId: "car-sales-1dcac",
  storageBucket: "car-sales-1dcac.appspot.com",
  messagingSenderId: "612744473380",
  appId: "1:612744473380:web:8368c8e0aeaf92fa77e1b1",
  measurementId: "G-BP27FV3BPC"
};

const firebaseConfigLaia = {
  apiKey: "AIzaSyAQ2ju-FJ5d-Y-4Qwv9OeX7wg4YL497m1U",
  authDomain: "car-sales-2369a.firebaseapp.com",
  projectId: "car-sales-2369a",
  storageBucket: "car-sales-2369a.appspot.com",
  messagingSenderId: "248883482614",
  appId: "1:248883482614:web:032699924e6232bff801d7",
  measurementId: "G-X2VFZ3X5ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
    AngularFireModule.initializeApp(firebaseConfig),
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
      provide: ReportsGateway,
      useClass: ReportsFirebaseService
    },
    {
      provide: SalesGateway,
      useClass: SalesFirebaseService
    },
    {
      provide: LoginGateway,
      useClass: LoginFirebaseService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Realiza la implementación en Firebase Hosting
// Puedes realizar la implementación ahora o más adelante. Para hacerlo ahora mismo, abre una ventana de la terminal y, luego, navega al directorio raíz de tu app web o crea uno.

// Acceder a Google
// firebase login
// Inicia el proyecto
// Ejecuta el siguiente comando en el directorio raíz de tu app:

// firebase init
// Cuando tengas todo listo, implementa tu app web
// Ubica los archivos estáticos (p. ej., HTML, CSS y JS) en el directorio de implementación de la app (el directorio predeterminado es “public”). Luego, ejecuta este comando desde el directorio raíz de tu app:

// firebase deploy
// Después de la implementación, consulta tu app en car-sales-1dcac.web.app.


