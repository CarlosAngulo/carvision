import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { IUserDTO } from "src/app/auth/models/user.model";
import { UsersGateway } from "../domain/users-gateway";
import { IPaginationDTO } from "src/app/shared/models/pagination.interface";

@Injectable({
    providedIn: 'root'
})
export class UsersService extends UsersGateway {

    url = environment.nodeUrl;

    constructor(private http: HttpClient) {
        super();
    }

    getAll(queryParams?:string): Observable<IPaginationDTO<IUserDTO>> {
        const url = queryParams ? `${this.url}/users?${queryParams}` : `${this.url}/users`;
        return this.http.get<IPaginationDTO<IUserDTO>>(url)
    }

    createUser(name: string, email: string, role: string): Observable<IUserDTO> {
        return this.http.post<IUserDTO>(`${this.url}/users`, {
            name,
            email,
            role
        })
    }
}