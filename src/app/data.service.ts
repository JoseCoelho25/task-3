import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<string>('');
  observerData = this.dataSubject.asObservable();

  constructor() { }

  updateData(newData: string) {
    this.dataSubject.next(newData);
  }
}
