import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ReportsGateway } from './api/domain/reports-gateway';
import { ReportsFirebaseService } from './api/infraestructure/reports-firebase.service';
import { ReportsComponent } from './pages/reports/reports.component';
import { SalesGateway } from './api/domain/sales-gateway';
import { SalesFirebaseService } from './api/infraestructure/sales-firebase.service';
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    {
      provide: ReportsGateway,
      useClass: ReportsFirebaseService
    },
    {
      provide: SalesGateway,
      useClass: SalesFirebaseService
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

// ¿Necesitas ayuda? Consulta los documentos de Hosting.

