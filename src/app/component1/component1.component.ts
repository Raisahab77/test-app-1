import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  dataArray: any[] | undefined;
  item = '';
  isInput = this._service.isInput;

  
  constructor(private _service:ShareService) {
    this._service.dataObs$.subscribe(data => {
      this.dataArray = data; // Update dataArray when new data is emitted
    });
   }


  ngOnInit(): void {
  }

  delete(element:string){
    this._service.deleteData(element);
  }
  update(){
    this._service.updateData(this.item);
  }

}
