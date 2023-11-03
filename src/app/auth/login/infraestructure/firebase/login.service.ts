import { Injectable } from "@angular/core";
import { Observable, from, of } from "rxjs";
import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { LoginGateway } from "../../domain/login-gateway";

@Injectable({
    providedIn: 'root'
})
export class LoginFirebaseService extends LoginGateway {

    constructor() {
        super();
    }

    login(email: string, password: string): Observable<UserCredential> {
        const auth = getAuth();
        return from(signInWithEmailAndPassword(auth, email, password));
    }

    logout(): Observable<any> {
        return of({})
    }

    isAutenticated(): Observable<boolean> {
        return of(false);
    }
}