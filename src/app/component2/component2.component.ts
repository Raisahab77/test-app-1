import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  dataArray: any[] | undefined;
  item = '';
  isBlue = true;

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

  hideInput(){
    this._service.isInput = true;
  }

  dropdownValue(event:any){
    this.item = event.target.value;
    console.log(this.item);
    if(this.dataArray?.includes(this.item)){
      console.log("This line gets execute");
      this._service.deleteData(this.item)
    }
    else{
      console.log("Else part gets execute");      
      this._service.updateData(this.item)
    }
    // this.dataArray?.includes(this.item) ? this._service.deleteData(this.item) : this._service.updateData(this.item);
    
  }

}
