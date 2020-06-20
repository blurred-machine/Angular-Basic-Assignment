import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverState = "offline"
  server_id = -1
  serverName = ''

  constructor() { 
    this.server_id =Math.round(Math.random() * 10)
    this.serverState = this.server_id > 5 ? 'online': 'offline';
  }

  getServerColor(){
    return this.serverState === 'offline'? 'LightCoral': 'GreenYellow';
  }
}
