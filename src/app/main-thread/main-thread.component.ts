import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Message} from '../shared/message';
import {DbService} from '../shared/db.service';

@Component({
  selector: 'app-main-thread',
  templateUrl: './main-thread.component.html',
  styleUrls: ['./main-thread.component.scss']
})
export class MainThreadComponent implements OnInit {

  message$: Observable<Message[]>;
  constructor(private _db: DbService) { }

  ngOnInit() {
    this._db.fetchData().subscribe(
      (messages)=>this.message$ = messages
    );
  }

}
