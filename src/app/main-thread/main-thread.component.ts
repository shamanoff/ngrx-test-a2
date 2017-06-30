import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Message} from '../model/message';
import {DbService} from '../shared/db.service';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../store/application-state';
import {LoadMessagesAction} from '../actions/actions';
// import * as _ from 'lodash';

@Component({
  selector: 'main-thread',
  templateUrl: './main-thread.component.html',
  styleUrls: ['./main-thread.component.scss']
})
export class MainThreadComponent implements OnInit {
  message$: Observable<Message[]>;
  constructor(private _db: DbService, private _store: Store<ApplicationState>) {
    this.message$ = _store.select('messages');
    _store.subscribe(
      state => console.log('main thread recived state ', state)
    );
  }

  ngOnInit() {

    this._db.fetchData()

      .subscribe(

      // (messages)=> console.log(JSON.stringify( messages ))
        messages => this._store.dispatch(
        new LoadMessagesAction(messages)
      )
    );
  }

}
