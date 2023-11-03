import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { SalesGateway } from '../../domain/sales-gateway';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SalesFirebaseService extends SalesGateway {

    constructor( private firestore: AngularFirestore) {
        super();
    }

    getAll(): Observable<any> {
        return this.firestore.collection<DocumentData>('sales').valueChanges({ idField: 'docId' });
    }

    getById(id: number): Observable<any> {
        return of({id})
    }
}