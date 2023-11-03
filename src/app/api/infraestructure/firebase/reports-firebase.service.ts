import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ReportsGateway } from "../../domain/reports-gateway";
import { AngularFirestore, DocumentReference, DocumentData } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
    providedIn: 'root'
})
export class ReportsFirebaseService extends ReportsGateway {

    constructor( private firestore: AngularFirestore) {
        super();
    }

    getAll(): Observable<any> {
        return this.firestore.collection<DocumentData>('reports').valueChanges({ idField: 'docId' });
    }

    getById(id: number): Observable<any> {
        return of({id})
    }
}