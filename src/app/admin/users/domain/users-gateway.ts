import { Observable } from "rxjs";
import { IUserDTO } from "src/app/auth/models/user.model";
import { IPaginationDTO } from "src/app/shared/models/pagination.interface";

export abstract class UsersGateway {
    abstract getAll(queryParams?:string): Observable<IPaginationDTO<IUserDTO>>;
    abstract createUser(name:string, email:string, role: string): Observable<IUserDTO>;
}