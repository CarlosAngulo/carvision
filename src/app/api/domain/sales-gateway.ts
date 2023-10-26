import { Observable } from "rxjs";

export abstract class SalesGateway {
    abstract getById(id: number): Observable<any>;
    abstract getAll(): Observable<any>;
}