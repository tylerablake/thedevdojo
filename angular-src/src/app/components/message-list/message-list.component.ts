import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onNotify(message:string){
    console.log('onNotify executed in message-list component');
  }
}
