import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { environment } from '../../../../../environments/environment';
import { LoginGateway } from "../../domain/login-gateway";
import { HttpClient } from "@angular/common/http";
import { IUserDTO } from "src/app/auth/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService extends LoginGateway {

    url = environment.nodeUrl;

    constructor(private http: HttpClient) {
        super();
    }

    login(email: string, password: string): Observable<IUserDTO> {
        return this.http.post<IUserDTO>(`${this.url}/auth/login`, {email, password})
        .pipe(
            tap((userCredential) => {
                const accessToken = userCredential.tokens.access.token;
                localStorage.setItem('accessToken', accessToken);
            })
        )
    }

    logout(): Observable<any> {
        return of({})
    }

    isAutenticated(): Observable<boolean> {
        return of(false);
    }
}