import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden] = "displayNotification">
                <p>This website uses cookies to provide better user experience. </p>
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
             </div>`,
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0 ; text-align: center ;}", "p{font-size: 14px;}",
                                 ".close{float: right; margin-top: -55px; margin-right: -15px}"]
})
export class NotificationComponent implements OnInit {

  displayNotification: boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

  closeNotification() {
      this.displayNotification = true;
  }


}
