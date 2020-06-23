import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverState = "offline"
  server = ''

  constructor() { 
    // this.server_id =Math.round(Math.random() * 10)
    this.serverState = Math.random()*10 > 5 ? 'online': 'offline';
    this.server = 'S'
  }

  getServerColor(){
    return this.serverState === 'offline'? 'LightCoral': 'GreenYellow';
  }
}
