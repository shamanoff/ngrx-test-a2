import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../messages/message';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent  {

 @Input()
  message: Message;

}
