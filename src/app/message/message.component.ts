import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../shared/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent  {

 @Input()
  message: Message;

}
