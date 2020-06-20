import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Paras Learn Angular';
  userName = ""
  allowNewServer = false
  serverCreated = false
  serverName = ""


  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  createServerBtnClick(){
    this.serverCreated = true
    // this.serverName = ''
  }

  onUserNameBtnClick(){
    this.userName = ''
  }

 
}

