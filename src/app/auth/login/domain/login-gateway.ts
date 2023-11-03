import { Observable } from "rxjs";

export abstract class LoginGateway {
    abstract login(email: string, password: string): Observable<any>;
    abstract logout(): Observable<any>;
    abstract isAutenticated(): Observable<boolean>;
}