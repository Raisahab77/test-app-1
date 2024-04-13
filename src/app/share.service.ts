import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  private data = new BehaviorSubject<any>(['apple']); // Initialize with an empty array
  dataObs$ = this.data.asObservable();

  isInput = false;

  updateData(element:string){
    const currentData = this.data.getValue(); // Get the current value of the BehaviorSubject
    currentData.push(element); // Modify the data
    this.data.next(currentData); // Emit the updated data
    console.log(this.data);
  }

  deleteData(element:string){
    const currentData = this.data.getValue();
    const index = currentData.indexOf(element);
    let newArray = currentData.splice(index,1);
    this.data.next(currentData);
    console.log(this.data);
  }

}
