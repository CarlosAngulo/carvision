import { Observable } from "rxjs";

export abstract class ReportsGateway {
    abstract getById(id: number): Observable<any>;
    abstract getAll(): Observable<any>;
}