import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent {

  msg_warn = ""
  click_status = false

  constructor() { 
    this.msg_warn = "huuuu this is hooor!"
    setTimeout(() => {this.click_status = true}, 3000)
  }

  onClickedByUser(){
    this.msg_warn = "finally button is enabled and clicked by you" 
  }

}
