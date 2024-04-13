import { Component } from '@angular/core';
import { ToastService } from 'toast-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  constructor(private _toast:ToastService){}

  showToast(){
    this._toast.displayToast("success","My first toast");
  }
}
