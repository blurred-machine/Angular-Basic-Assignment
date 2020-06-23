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
  serverName = 0
  serversList = []

  count_data = []
  count=0
  count_color=''


  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  createServerBtnClick(){
    this.serverCreated = true
    this.serversList.push(this.serverName)
  }

  onUserNameBtnClick(){
    this.userName = ''
  }

  onAddNumBtnClick(){
    this.count += 1
    this.count_data.push(this.count)
    return this.count_data
  }

  getCounterColor(){
    return this.count >= 5 ? 'LightCoral': 'GreenYellow'; 
  }
}

