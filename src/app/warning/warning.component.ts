import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  msg_warn = ""

  constructor() { 
    this.msg_warn = "huuuu this is hooor!"
  }

  ngOnInit(): void {
  }

}
